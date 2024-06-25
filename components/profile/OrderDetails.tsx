import PersonIcon from "@mui/icons-material/Person";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import localFont from "@next/font/local";
import { useLocale } from "next-intl";
import { Order } from "./OrderHistory";
import Image from "next/image";


const mtavruli = localFont({ src: "../../public/fonts/mtavruli.ttf" });

function OrderDetails({ order }: { order: Order }) {
  const locale = useLocale();

  const formattedOrderDate = new Date(order.ordertime).toLocaleString("ka-GE", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const estimatedDeliveryDate = new Date(order.ordertime);
  estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 3);

  const formattedEstimatedDeliveryDate = estimatedDeliveryDate.toLocaleString("ka-GE", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="w-full m-auto mt-[50px]">
      <h2 className={`text-md ${mtavruli.className} font-semibold text-start w-full my-3`}>
        {locale == "en" ? "Order Details" : "შეკვეთის დეტალები"}
      </h2>
      <div className="flex flex-col">
        <div className="w-full border border-[#F5F6F6] rounded-lg py-6 px-0 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-[25px] justify-between">
            <div className="flex flex-col gap-y-2">
              <span className={`text-gray-700 font-semibold text-sm ${mtavruli.className}`}>
                {locale == "en" ? "Order Details" : "შეკვეთის ნომერი"}
              </span>
              <span className="text-gray-500 text-sm">SUP-312{order.id}</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className={`text-gray-700 font-semibold text-sm ${mtavruli.className}`}>
                {locale == "en" ? "Order Status" : "სტატუსი"}
              </span>
              <span
                className={`text-sm ${order.status === "მიღებულია"
                  ? "text-green-500"
                  : order.status === "გზაშია" ? "text-yellow-500" : "text-red"
                  }`}
              >
                {order.status} {order.status === "მიღებულია" ? "🎉" : ""}
                {order.status === "გზაშია" ? "🚚" : ""}
                {order.status === "გზაშია" ? (<br />) : ""}
                {order.status === "გზაშია" ? (<span className="text-black underline cursor-pointer text-[12px]">
                  {locale == "en" ? "See Location" : "კურიერის ლოკაცია"}
                </span>) : ""}
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className={`text-gray-700 font-semibold text-sm ${mtavruli.className}`}>
                {locale == "en" ? "Purchase Date" : "შეძენის თარიღი"}
              </span>
              <span className="text-gray-500 text-sm">{formattedOrderDate}</span>
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg pt-1 pb-5 px-0 lg:px-8 flex flex-col space-y-6">
          <div className={`text-gray-700 font-semibold text-sm ${mtavruli.className}`}>
            {locale == "en" ? "Products:" : "პროდუქტები:"}
          </div>
          {order.products.map((product) => (
            <div key={product.productDetails.id} className="flex justify-between gap-10">
              <div className="flex gap-5 flex-1">
                <Image src={product.productDetails.image} alt={product.productDetails.title} width={100} height={100} className="w-[50px] h-[50px]" />
                <div className="flex flex-col text-sm">
                  <span className={`font-bold ${mtavruli.className}`}>{product.productDetails.title}</span>
                  <span className={`${mtavruli.className}`}>{product.productDetails.description}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className={`font-bold text-sm ${mtavruli.className}`}>{locale === "en" ? "Quantity" : "რაოდენობა"}</span>
                <span className="text-center text-sm">{product.quantity}</span>
              </div>
              <div className="hidden md:flex flex-col justify-center">
                <span className={`font-bold text-sm ${mtavruli.className}`}>{locale === "en" ? "Price" : "ფასი"}</span>
                <span className="text-center text-sm">{product.productDetails.price} ₾</span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full rounded-lg py-6 px-0 lg:px-8 flex flex-col space-y-6">
          <div className="flex items-center gap-4 border-b-[1px] border-[#F5F6F6] pb-6">
            <div className="bg-[#F5F6F6] p-2 rounded-md">
              <PersonIcon className="text-[#1e90ff]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold text-sm">{locale == "en" ? "Receiver" : "მიმღები"}</span>
              <div className="flex gap-2 text-center">
                <span className="text-gray-700 font-medium text-sm">
                  {" "}
                  {order.name} {order.surname}
                </span>
                <span className="text-gray-700 font-medium text-sm">
                  {" "}
                  {order.phone}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b-[1px] border-[#F5F6F6] pb-6">
            <div className="bg-[#F5F6F6] p-2 rounded-md">
              <FmdGoodIcon className="text-[#1e90ff]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold text-sm"> {locale == "en" ? "Address" : "მისამართი"}</span>
              <span className="text-gray-700 font-medium text-sm">
                {" "}
                {order.address}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b-[1px] border-[#F5F6F6] pb-6">
            <div className="bg-[#F5F6F6] p-2 rounded-md">
              <LocalShippingIcon className="text-[#1e90ff]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold text-sm">
                {locale == "en" ? "Estimated time of delivery" : "მიტანის სავარაუდო დრო"}
              </span>
              <span className="text-gray-700 font-medium text-sm">
                {" "}
                {formattedEstimatedDeliveryDate}
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default OrderDetails;
