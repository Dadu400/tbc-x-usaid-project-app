import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function OrderHistory() {
    return (
        <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
            <h2 className="text-2xl font-['mtavruli'] font-semibold mb-[10px] text-start w-full">შეკვეთების ისტორია</h2>
            <div className="flex flex-col">
                <div className="mt-[40px] flex items-center justify-between gap-5 shadow-md rounded-md p-[25px]">
                    <div className='rounded-full bg-gray-100 p-4'>
                        <Inventory2OutlinedIcon className="text-[#1e90ff]" />
                    </div>
                    <div className='flex flex-col w-[40%] space-y-2'>
                        <div className='flex items-start justify-between'>
                            <span className="font-semibold text-sm">შეკვეთის ნომერი: #fsdf</span>
                            <span className="font-semibold text-sm">ჯამი: 175 ლ</span>
                        </div>
                        <div className='flex items-start justify-between text-start'>
                            <span className="font-medium text-sm">პროდუქტი: 1</span>
                            <span className="font-medium text-sm">თარიღი: დეკ. 30 2023</span>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className="text-sm font-semibold flex justify-center">
                            დეტალურად
                            <NavigateNextIcon className='text-[20px]' />
                        </button>
                    </div>
                </div>
                <div className="mt-[40px] flex items-center justify-between gap-5 shadow-md rounded-md p-[25px]">
                    <div className='rounded-full bg-gray-100 p-4'>
                        <Inventory2OutlinedIcon className="text-[#1e90ff]" />
                    </div>
                    <div className='flex flex-col w-[40%] space-y-2'>
                        <div className='flex items-start justify-between'>
                            <span className="font-semibold text-sm">შეკვეთის ნომერი: #fsdf</span>
                            <span className="font-semibold text-sm">ჯამი: 175 ლ</span>
                        </div>
                        <div className='flex items-start justify-between text-start'>
                            <span className="font-medium text-sm">პროდუქტი: 1</span>
                            <span className="font-medium text-sm">თარიღი: დეკ. 30 2023</span>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className="text-sm font-semibold flex justify-center">
                            დეტალურად
                            <NavigateNextIcon className='text-[20px]' />
                        </button>
                    </div>
                </div>
                <div className="mt-[40px] flex items-center justify-between gap-5 shadow-md rounded-md p-[25px]">
                    <div className='rounded-full bg-gray-100 p-4'>
                        <Inventory2OutlinedIcon className="text-[#1e90ff]" />
                    </div>
                    <div className='flex flex-col w-[40%] space-y-2'>
                        <div className='flex items-start justify-between'>
                            <span className="font-semibold text-sm">შეკვეთის ნომერი: #fsdf</span>
                            <span className="font-semibold text-sm">ჯამი: 175 ლ</span>
                        </div>
                        <div className='flex items-start justify-between text-start'>
                            <span className="font-medium text-sm">პროდუქტი: 1</span>
                            <span className="font-medium text-sm">თარიღი: დეკ. 30 2023</span>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <button className="text-sm font-semibold flex justify-center">
                            დეტალურად
                            <NavigateNextIcon className='text-[20px]' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderHistory;