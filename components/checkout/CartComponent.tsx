import Link from 'next/link';
import { useTranslations } from 'next-intl';

export interface CartComponentProps {
    totalQuantity: number;
    totalAmount: number;
    showButton?: boolean;
}

function CartComponent({ totalQuantity, totalAmount, showButton = true }: CartComponentProps) {
    const t = useTranslations("Cart");
    return (
        <div className="flex flex-col  items-start gap-y-4 flex-1.5 md:ml-6 border-gray-200 border-[1px] rounded-md p-[24px] h-[260px] bg-white">
            <h3 className="text-md font-bold mb-4">{t("pay")}</h3>
            <div className="flex justify-between">
                <span className="text-sm text-[#8A4E23] font-semibold">{t("products")} ({totalQuantity})</span>
            </div>
            <div className="flex justify-between border-y-[1px] border-gray-200 py-4">
                <span className="font-semibold text-black text-sm mr-14">{t("total")}</span>
                <span className="font-semibold text-black text-sm">{totalAmount.toFixed(2)} ₾</span>
            </div>
            {showButton && (
                <Link href="/checkout">
                    <button
                        className="w-full px-4 py-2 text-md font-medium mt-2 text-white bg-[#1e90ff] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                        {t("checkout")}
                    </button>
                </Link>
            )}
        </div>
    );
}

export default CartComponent;
