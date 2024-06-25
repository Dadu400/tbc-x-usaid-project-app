import localFont from "@next/font/local";
import { useTranslations } from "next-intl";
import { Order } from "../profile/OrderHistory";

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function CourierTracking({ order }: { order: Order }) {
    const t = useTranslations("Tracking");

    const formattedDate = new Date(order.ordertime).toLocaleString("ka-GE", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    });

    return (
        <>
            <div className={`text-lg font-bold ${mtavruli.className} w-full flex justify-center items-center mt-[40px]`}>
                {t("h1")}
            </div>
            <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto flex items-center justify-center mt-5 mb-5">
                <div className="flex flex-col gap-[5px]">
                    <div className="flex gap-[15px] text-sm">
                        <div className={`font-bold  ${mtavruli.className}`}>
                            {t("orderNumber")} :
                        </div>
                        <div>SUP-312{order.id}</div>
                    </div>
                    <div className="flex gap-[15px] text-sm">
                        <div className={`font-bold  ${mtavruli.className}`}>{t("orderStatus")} : </div>
                        <div className="text-yellow-500">გზაშია 🚚</div>
                    </div>
                    <div className="flex gap-[15px] text-sm">
                        <div className={`font-bold ${mtavruli.className}`}>
                            {t("orderDate")} :
                        </div>
                        <div>{formattedDate}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourierTracking