"use client";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import OrderDetails from "./OrderDetails";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useLocale } from "next-intl";
import { Order } from "./OrderHistory";

export interface OrderCardProps {
  order: Order;
}

function OrderCard({ order }: OrderCardProps) {
  const [isOrderExpanded, setOrderExpanded] = useState(false);
  const locale = useLocale();

  const handleOrderExpand = () => {
    setOrderExpanded(!isOrderExpanded);
  }

  const totalPrice = order.products.reduce((acc, product) => {
    return acc + product.productDetails.price * product.quantity;
  }, 0);

  const formattedDate = new Date(order.ordertime).toLocaleString("ka-GE", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="mt-[40px] shadow-md dark:shadow-[#ffffff1f] rounded-md p-[25px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-gray-100 dark:bg-[#121B18] dark:border dark:border-[#ffffff1f] rounded-full flex items-center justify-center p-4 relative">
            <Inventory2OutlinedIcon className="text-[#1e90ff] dark:text-white" />
            <div
              className={`absolute top-2 right-0 h-2 w-2 rounded-full ${order.status === 'ჩაბარებულია' ? 'bg-green-500' : order.status === 'გზაშია' ? 'bg-yellow-500' : 'bg-red'
                }`}
            />
          </div>
          <div className="ml-4 flex flex-col gap-y-2">
            <div className="text-gray-700 dark:text-white font-semibold text-sm">
              {locale == "en" ? "Order #" : "შეკვეთის #"}{order.id}
            </div>
            <div className="text-gray-500 dark:text-[#ffffffbf] text-sm">
              {locale == "en" ? "Products: " : "პროდუქტები: "} {order.products.length}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex text-right flex-col gap-y-2">
          <div className="text-sm font-semibold text-gray-700 dark:text-white">
            {totalPrice} {locale == "en" ? " GEL" : " ლარი"}
          </div>
          <div className="text-gray-500 dark:text-[#ffffffbf] text-sm ">{formattedDate}</div>
        </div>
        <button className="text-sm font-semibold flex justify-center hover:text-[#8A4E23]" onClick={() => handleOrderExpand()}>
          {isOrderExpanded ? (locale === "en" ? 'Hide' : 'დამალვა') : (locale === "en" ? 'Details' : 'დეტალები')}
          {isOrderExpanded ? <KeyboardArrowUpIcon className="text-[20px]" /> : <NavigateNextIcon className="text-[20px]" />}
        </button>
      </div>
      {isOrderExpanded && (<OrderDetails order={order} />)}
    </div>
  );
}

export default OrderCard;
