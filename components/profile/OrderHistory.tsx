import OrderCard from "./OrderCard";
import { getTranslations } from "next-intl/server";
import { getAllOrders, getOrders } from "../../helpers/axios";
import { Product } from "../products/ProductList";
import localFont from "@next/font/local";
import { GetSession } from "../../actions";
import { User } from "../auth/LoginForm";
import { JWTPayload } from "jose";

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

export interface ProductDetails {
  productDetails: Product;
  quantity: number;
}

export interface Order {
  id: string;
  name: string;
  surname: string;
  phone: string;
  address: string;
  status: string;
  products: ProductDetails[];
  ordertime: string;
}

async function OrderHistory() {
  const session: JWTPayload | undefined = await GetSession();
  if (session === undefined) {
    return null;
  }

  const user: User = session.user as User;

  const orders: Order[] = user.admin ? await getAllOrders() : await getOrders();
  orders.sort((a, b) => new Date(b.ordertime).getTime() - new Date(a.ordertime).getTime());

  const t = await getTranslations("Orders");
  return (
    <div className="flex flex-col border dark:border-[#ffffff1f] shadow-lg rounded-lg bg-[#FEFEFE] dark:bg-[#1D2024] p-8">
      <h2 className={`text-2xl ${mtavruli.className} uppercase font-semibold mb-[20px] text-center w-full`}>
        {user.admin ? t("headingAdmin") : t("heading")}
      </h2>
      <div className="flex flex-col">
        {orders.map((order: Order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
