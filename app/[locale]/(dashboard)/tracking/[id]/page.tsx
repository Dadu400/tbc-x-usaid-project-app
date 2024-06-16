import localFont from "@next/font/local";
import DashboardLayout from "../../DashboardLayout";
import dynamic from 'next/dynamic';


const mtavruli = localFont({ src: '../../../../../public/fonts/mtavruli.ttf' })

const Map = dynamic(() => import('../../../../../components/tracking/Map'), { ssr: false });


function CourierTrackingPage() {
  return (
    <DashboardLayout>
        <div className={`text-lg font-bold ${mtavruli.className} w-full flex justify-center items-center mt-[40px]`}>კურიერის მდებარეობა</div>
        <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto flex items-center justify-center mt-5 mb-5">
            <div className="flex flex-col gap-[5px]">
                <div className="flex gap-[15px] text-sm">
                    <div className={`font-bold  ${mtavruli.className}`}>შეკვეთის ნომერი:</div>
                    <div>ORD-123456</div>
                </div>
                <div className="flex gap-[15px] text-sm">
                    <div className={`font-bold  ${mtavruli.className}`}>შეკვეთის სტატუსი: </div>
                    <div className="text-yellow-500">გზაშია 🚚</div>
                </div>
                <div className="flex gap-[15px] text-sm">
                    <div className={`font-bold ${mtavruli.className}`}>შეძენის თარიღი: </div>
                    <div>ნოე. 27 2023, 23:39</div>
                </div>
            </div>
        </div>
        <Map />
    </DashboardLayout>
  );
}

export default CourierTrackingPage;