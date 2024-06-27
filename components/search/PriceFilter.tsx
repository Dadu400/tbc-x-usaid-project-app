"use client";

import localFont from '@next/font/local';
import { useLocale } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' });

function PriceFilter() {
    const locale = useLocale();

    const router = useRouter();
    const searchParams = useSearchParams();

    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');


    return (
        <form className="flex flex-col gap-[15px] w-full" onSubmit={(e) => {
            e.preventDefault();

            const queryStrings = new URLSearchParams();
            searchParams.forEach((value, key) => {
                queryStrings.set(key, value);
            });
            queryStrings.set('priceFrom', priceFrom);
            queryStrings.set('priceTo', priceTo);

            router.replace(`/search?${queryStrings.toString()}`);
        }}>
            <div className="flex flex-col gap-[10px] w-full">
                <input type="number"
                    placeholder={locale === 'en' ? "from" : "დან"}
                    className="border-[1px] rounded px-[10px] py-[5px] text-sm bg-white dark:text-[#191C20] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    value={priceFrom}
                    onChange={(e) => {
                        setPriceFrom(e.target.value);
                    }} />
                <input type="number"
                    placeholder={locale === 'en' ? "to" : "მდე"}
                    className="border-[1px] rounded px-[10px] py-[5px] text-sm bg-white dark:text-[#191C20] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    value={priceTo}
                    onChange={(e) => {
                        setPriceTo(e.target.value);
                    }} />
            </div>
            <button className={`w-full text-sm bg-[#EC6652] py-1 rounded-lg text-white ${mtavruli.className}`}>
                {locale === 'en' ? "Apply" : "გაფილტვრა"}
            </button>
        </form>
    )
}

export default PriceFilter;