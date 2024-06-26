"use client"

import { useEffect, useState } from 'react';
import localFont from "@next/font/local";
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Cancel from '../../public/cancel.webp';
import { cancelOrder } from '../../actions';

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' });

function CancelOrder() {
    const [counter, setCounter] = useState(5);
    const router = useRouter();

    const orderId = useSearchParams().get('orderId');
    if (orderId === undefined) {
        router.push('/');
    }

    useEffect(() => {
        if (orderId) {
            cancelOrder(orderId);
        }
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prevCounter => prevCounter - 1);
        }, 1000);

        if (counter === 0) {
            clearInterval(timer);
            router.push('/');
        }

        return () => clearInterval(timer);
    }, [counter, router]);

    return (
        <div className="flex flex-col m-auto w-[60vw] my-[80px] items-center relative gap-10">
            <h1 className={`text-xl font-semibold ${mtavruli.className} mt-[20px] text-center w-full uppercase`}>თქვენი შეკვეთა გაუქმებულია</h1>
            <Image src={Cancel} alt="success" width={1090} height={1000} className="w-[500px] h-[300px] rounded-lg" />
            <span className={`cursor-pointer ${mtavruli.className} text-md`}> გადამისამართება მთავარ გვერდზე </span>
            <span id="countdown" className="text-center" style={{
                fontSize: counter === 0 ? '2vw' : '2vw',
                opacity: counter === 0 ? 0.5 : 1,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                transition: '3s',
                color: '#EC6652'
            }}>
                {counter === 0 ? "" : counter}
            </span>
        </div>
    );
}

export default CancelOrder;
