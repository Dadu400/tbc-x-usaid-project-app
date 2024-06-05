import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Order {
  id: string;
  products: number;
  price: string;
  date: string;
  status: string;
}

interface OrderCardProps {
  order: Order;
}

function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="mt-[40px] shadow-md rounded-md p-[25px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-gray-100 rounded-full flex items-center justify-center p-4 relative">
          <Inventory2OutlinedIcon className="text-[#1e90ff]" />
            <div
              className={`absolute top-2 right-0 h-2 w-2 rounded-full ${
                order.status === 'მიღებულია' ? 'bg-green-500' : 'bg-red'
              }`}
            />
          </div>
          <div className="ml-4 flex flex-col gap-y-2">
            <div className="text-gray-700 font-semibold text-sm">
              შეკვეთის #{order.id}
            </div>
            <div className="text-gray-500 text-sm">
              პროდუქტები: {order.products}
            </div>
          </div>
        </div>
        <div className="text-right flex flex-col gap-y-2">
          <div className="text-sm font-semibold text-gray-700">
            {order.price} ლარი
          </div>
          <div className="text-gray-500 text-sm ">{order.date}</div>
        </div>
        <button className="text-sm font-semibold flex justify-center hover:text-[#8A4E23]">
          დეტალურად
          <NavigateNextIcon className="text-[20px]" />
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
