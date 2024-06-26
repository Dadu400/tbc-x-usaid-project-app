"use client";

import Image from "next/image";
import Success from "../../public/success.webp";
import localFont from "@next/font/local";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { orderMoneyPaid } from "../../actions";

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function SuccessOrder() {
    const router = useRouter();

    const orderId = useSearchParams().get('orderId');
    if (orderId === undefined) {
        router.push('/');
    }

    useEffect(() => {
        if (orderId) {
            orderMoneyPaid(orderId);
        }
    }, [orderId])

    return (
        <div className="flex flex-col m-auto w-[60vw] my-[80px] items-center">
            <Image src={Success} alt="success" width={1090} height={1000} className="w-[500px] h-[300px] rounded-lg" />
            <h1 className={`text-xl font-semibold ${mtavruli.className} my-[20px] text-center w-full uppercase`}>გადახდა წარმატებით განხორციელდა</h1>
            <Link href={"/profile/orders"} className="w-[280px] px-4 py-2 text-md font-medium text-center text-white bg-[#1e90ff] rounded-md mt-[16px]">ყველა შეკვეთის ნახვა</Link>
        </div>
    )
}

export default SuccessOrder;