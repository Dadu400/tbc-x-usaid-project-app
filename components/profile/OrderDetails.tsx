import PersonIcon from "@mui/icons-material/Person";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import localFont from "@next/font/local";

const mtavruli = localFont({ src: "../../public/fonts/mtavruli.ttf" });

function OrderDetails() {
  const orderDetails = {
    id: "ORD-123456",
    products: 3,
    price: "19.20",
    date: "ნოე. 27 2023, 23:39",
    status: "გზაშია",
    customerName: "Dali Khukhunashvili",
    customerPhone: "+995558632021",
    address: "გიორგი ატენის ქუჩა 31, 2 საცხოვრებელი სახლი",
    deliveryDate: "28 ნოემბერი 2023 - 12:00-15:00",
    paymentMethod: "548888xxxxxx6966",
    productPrice: "67.00",
    discount: "-43.00",
    deliveryFee: "4.80",
    total: "19.20",
  };

  return (
    <div className="w-full m-auto mt-[50px]">
      <h2 className={`text-md ${mtavruli.className} font-semibold text-start w-full my-3`}>
        შეკვეთის დეტალები
      </h2>
      <div className="flex flex-col">
        <div className="w-full border border-[#F5F6F6] rounded-lg py-6 px-0 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-[25px] justify-between">
            <div className="flex flex-col gap-y-2">
              <span className={`text-gray-700 font-semibold text-sm ${mtavruli.className}`}>
                შეკვეთის ნომერი
              </span>
              <span className="text-gray-500 text-sm">{orderDetails.id}</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className={`text-gray-700 font-semibold text-sm ${mtavruli.className}`}>
                სტატუსი
              </span>
              <span
                className={`text-sm ${
                  orderDetails.status === "მიღებულია"
                    ? "text-green-500"
                    : orderDetails.status === "გზაშია" ? "text-yellow-500" : "text-red"
                }`}
              >
                {orderDetails.status} {orderDetails.status === "მიღებულია" ? "🎉" : ""}
                {orderDetails.status === "გზაშია" ? "🚚" : ""}
                {orderDetails.status === "გზაშია" ? (<br />) : ""}
                {orderDetails.status === "გზაშია" ? (<span className="text-black underline cursor-pointer">
                    კურიერის ლოკაცია
                </span>) : ""}
              </span>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className={`text-gray-700 font-semibold text-sm ${mtavruli.className}`}>
                შეძენის თარიღი
              </span>
              <span className="text-gray-500 text-sm">{orderDetails.date}</span>
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg py-6 px-0 lg:px-8 flex flex-col space-y-6">
          <div className="flex items-center gap-4 border-b-[1px] border-[#F5F6F6] pb-6">
            <div className="bg-[#F5F6F6] p-2 rounded-md">
              <PersonIcon className="text-[#1e90ff]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold text-sm">მიმღები</span>
              <div className="flex gap-2 text-center">
                <span className="text-gray-700 font-medium text-sm">
                  {" "}
                {orderDetails.customerName}
                </span>
                <span className="text-gray-700 font-medium text-sm">
                  {" "}
                  {orderDetails.customerPhone}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b-[1px] border-[#F5F6F6] pb-6">
            <div className="bg-[#F5F6F6] p-2 rounded-md">
              <FmdGoodIcon className="text-[#1e90ff]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold text-sm">მისამართი</span>
              <span className="text-gray-700 font-medium text-sm">
                {" "}
                {orderDetails.address}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 border-b-[1px] border-[#F5F6F6] pb-6">
            <div className="bg-[#F5F6F6] p-2 rounded-md">
              <LocalShippingIcon className="text-[#1e90ff]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold text-sm">
                მიტანის სავარაუდო დრო
              </span>
              <span className="text-gray-700 font-medium text-sm">
                {" "}
                {orderDetails.deliveryDate}
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
