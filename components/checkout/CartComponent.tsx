"use client";

import localFont from "@next/font/local";
import { useLocale } from "next-intl";

export interface CartComponentProps {
    totalQuantity: number;
    totalAmount: number;
    showButton?: boolean;
    filteredProducts: any[];
    session: any;
}

const checkout = async (filteredProducts: any[], session: any) => {
    await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + "/api/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: filteredProducts, user: session.user }),
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.url) {
                window.location.href = response.url;
            }
        })
        .catch((error) => {
            console.error("Error during checkout:", error);
        });
};

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function CartComponent({ totalQuantity, totalAmount, showButton = true, filteredProducts, session }: CartComponentProps) {
    const locale = useLocale();
    return (
        <div className="dark:bg-[#1D2024] w-full flex flex-col items-start gap-y-4 flex-1.5 md:ml-6 border-gray-200 dark:border-[#ffffff1f] border-[1px] rounded-md p-[24px] h-[260px] basis-1/4">
            <h3 className={`text-md font-bold mb-4 ${mtavruli.className}`}>
                {locale === "en" ? "Order Summary" : "შეკვეთის შეჯამება"}
            </h3>
            <div className="flex justify-between">
                <span className="text-sm text-[#8A4E23] dark:text-[#ffffffbf] font-semibold">
                    ({totalQuantity}) {locale === "en" ? "Product" : "პროდუქტი"}</span>
            </div>
            <div className="w-full flex justify-between border-y-[1px] border-gray-200 dark:border-[#ffffff1f] py-4">
                <span className="font-semibold text-sm mr-14">
                    {locale === "en" ? "Total Price" : "ჯამი"}
                </span>
                <span className="font-semibold text-sm">{totalAmount.toFixed(2)} ₾</span>
            </div>
            {showButton && (
                <button
                    onClick={() => { checkout(filteredProducts, session) }}
                    className="w-full px-4 py-2 text-md font-medium mt-2 text-white bg-[#1e90ff] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                    {locale === "en" ? "Proceed to Checkout" : "გადახდა"}
                </button>
            )}
        </div>
    );
}

export default CartComponent;
