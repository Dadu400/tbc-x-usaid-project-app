import OrderCard from "./OrderCard";

interface Order {
  id: string;
  products: number;
  price: string;
  date: string;
  status: string;
}

const orders: Order[] = [
  {
    id: "249738",
    products: 3,
    price: "67.10",
    date: "დეკ. 30 2023, 23:25",
    status: "მიღებულია",
  },
  {
    id: "205876",
    products: 3,
    price: "19.20",
    date: "ნოე. 27 2023, 23:39",
    status: "მიღებულია",
  },
  {
    id: "188014",
    products: 2,
    price: "143.88",
    date: "ნოე. 11 2023, 12:25",
    status: "გაუქმებულია",
  },
  {
    id: "140002",
    products: 1,
    price: "50.36",
    date: "აგვ. 25 2023, 10:54",
    status: "მიღებულია",
  },
];

function OrderHistory() {
  return (
    <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
      <h2 className="text-2xl font-['mtavruli'] font-semibold text-start w-full">
        შეკვეთების ისტორია
      </h2>
      <div className="flex flex-col">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
