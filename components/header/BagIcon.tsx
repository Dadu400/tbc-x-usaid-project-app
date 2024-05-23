import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { getUserCart } from "../../helpers/axios";

export interface Cart {
  id: number;
  user_id: number;
  products: {
    [key: string]: number;
  };
  added_on: string;
}

export default async function BagIcon() {
  const cart: Cart = await getUserCart(1);
  const num = Object.values(cart.products);
  const totalQuantity = num.reduce((total: number, quantity: number) => {
    return total + quantity;
  }, 0);

  console.log(totalQuantity);
  return (
    <li className="uppercase font-bold relative">
      <Link href="/cart">
        <FontAwesomeIcon icon={faBagShopping} className="h-5" />
        <span className="absolute bottom-4 left-4 inline-flex items-center justify-center text-xs font-bold leading-none text-black rounded-full">
          {totalQuantity}
        </span>
      </Link>
    </li>
  );
}