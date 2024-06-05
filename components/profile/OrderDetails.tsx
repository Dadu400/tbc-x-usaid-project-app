import Stepper from "./Stepper";
import PersonIcon from '@mui/icons-material/Person';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';

function OrderDetails() {
    const orderDetails = {
        id: 'ORD-123456',
        products: 3,
        price: '19.20',
        date: 'ნოე. 27 2023, 23:39',
        status: 'მიღებულია',
        customerName: 'Dali Khukhunashvili',
        customerPhone: '+995558632021',
        address: 'გიორგი ატენის ქუჩა 31, 2 საცხოვრებელი სახლი',
        deliveryDate: '28 ნოემბერი 2023 - 12:00-15:00',
        paymentMethod: '548888xxxxxx6966',
        productPrice: '67.00',
        discount: '-43.00',
        deliveryFee: '4.80',
        total: '19.20',
    };

    const steps = [
        { label: 'მუშავდება', completed: true },
        { label: 'გზაშია', completed: true },
        { label: 'მიღებულია', completed: true },
    ];

    return (
        <div className="w-[60vw] m-auto mt-[20px]">
            <h2 className="text-2xl font-['mtavruli'] font-semibold text-start w-full my-6">
                შეკვეთის დეტალები
            </h2>
            <div className="flex justify-between gap-10">
                <div className="flex flex-col gap-10" style={{ flex: "2" }}>
                    <div className="w-full border border-[#F5F6F6] rounded-lg py-6 px-8">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-y-2">
                                <span className="text-gray-700 font-semibold text-sm">შეძენის თარიღი</span>
                                <span className="text-gray-500 text-sm">{orderDetails.date}</span>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <span className="text-gray-700 font-semibold text-sm">შეკვეთის ნომერი</span>
                                <span className="text-gray-500 text-sm">{orderDetails.id}</span>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <span className="text-gray-700 font-semibold text-sm">სტატუსი</span>
                                <span
                                    className={`text-sm font-semibold ${orderDetails.status === 'მიღებულია' ? 'text-green-500' : 'text-gray-500'
                                        }`}
                                >
                                    {orderDetails.status}
                                </span>
                            </div>
                        </div>
                    </div>
                    <Stepper steps={steps} />
                    <div className="w-full border border-[#F5F6F6] rounded-lg py-6 px-8 flex flex-col space-y-6">
                        <div className="flex items-center gap-4 border-b-[1px] border-[#F5F6F6] pb-6">
                            <div className="bg-[#F5F6F6] p-2 rounded-md">
                                <PersonIcon className="text-[#1e90ff]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-bold text-sm">მიმღები</span>
                                <div className="flex gap-2 text-center">
                                    <span className="text-gray-700 font-medium text-sm"> {orderDetails.customerName}</span>
                                    <span className="text-gray-700 font-medium text-sm"> {orderDetails.customerPhone}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-b-[1px] border-[#F5F6F6] pb-6">
                            <div className="bg-[#F5F6F6] p-2 rounded-md">
                                <FmdGoodIcon className="text-[#1e90ff]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-bold text-sm">მისამართი</span>
                                <span className="text-gray-700 font-medium text-sm"> {orderDetails.address}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-b-[1px] border-[#F5F6F6] pb-6">
                            <div className="bg-[#F5F6F6] p-2 rounded-md">
                                <LocalShippingIcon className="text-[#1e90ff]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-700 font-bold text-sm">მიტანის დრო</span>
                                <span className="text-gray-700 font-medium text-sm"> {orderDetails.deliveryDate}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div style={{ flex: "1" }}>
                    <div className="border border-[#F5F6F6] rounded-lg py-6 px-8 flex flex-col space-y-6">
                        <h3 className="text-gray-700 font-bold text-md">გადახდის მეთოდი</h3>
                        <div className="flex items-center justify-center gap-3 border border-[#F5F6F6] rounded-lg p-2">
                            <CreditCardIcon className="text-gray-700" />
                            <span className="text-gray-700 text-md">{orderDetails.paymentMethod}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#8A4E23] font-semibold text-sm">ფასდაკლება</span>
                            <span className="text-[#8A4E23] text-sm">{orderDetails.discount}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-700 font-semibold text-sm">ჯამი</span>
                            <span className="text-gray-500 text-sm">{orderDetails.total}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;