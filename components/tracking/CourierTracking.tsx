import localFont from "@next/font/local";
import { useTranslations } from "next-intl";

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function CourierTracking() {
    const t = useTranslations("Tracking");

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
                        <div>ORD-123456</div>
                    </div>
                    <div className="flex gap-[15px] text-sm">
                        <div className={`font-bold  ${mtavruli.className}`}>{t("orderStatus")} : </div>
                        <div className="text-yellow-500">გზაშია 🚚</div>
                    </div>
                    <div className="flex gap-[15px] text-sm">
                        <div className={`font-bold ${mtavruli.className}`}>
                            {t("orderDate")} :
                        </div>
                        <div>ნოე. 27 2023, 23:39</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourierTracking