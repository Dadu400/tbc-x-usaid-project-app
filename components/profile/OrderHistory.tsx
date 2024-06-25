import OrderCard from "./OrderCard";
import { getTranslations } from "next-intl/server";
import { getOrders } from "../../helpers/axios";
import { Product } from "../products/ProductList";
import localFont from "@next/font/local";

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
  const orders: Order[] = await getOrders();
  const t = await getTranslations("Orders");
  return (
    <div className="flex flex-col border dark:border-[#ffffff1f] shadow-lg rounded-lg bg-[#FEFEFE] dark:bg-[#1D2024] p-8">
      <h2 className={`text-2xl ${mtavruli.className} uppercase font-semibold mb-[20px] text-center w-full`}>
        {t("heading")}
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
