"use client";

import React, { useEffect, useRef, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Typed from 'typed.js';
import localFont from '@next/font/local';
import { useLocale } from "next-intl";
import { useRouter, useSearchParams } from 'next/navigation';

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function SearchBar({ className }: { className: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [query, setQuery] = useState(searchParams.get('q') || '');

    const typedElement = useRef(null);
    const locale = useLocale();

    useEffect(() => {
        const strings = [
            locale === "en" ? "Toys" : "თოჯინები",
            locale === "en" ? "Puzzles" : "ფაზლები",
            locale === "en" ? "Books" : "წიგნები",
            locale === "en" ? "Board Games" : "საკოლექციო თამაშები"
        ];

        const typed = new Typed(typedElement.current, {
            strings,
            typeSpeed: 75,
            backSpeed: 75,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, [locale]);

    return (
        <div className={className}>
            <div className="text-[#191C20] text-xl">
                <span className={`font-semibold text-[#EC6652] uppercase ${mtavruli.className}`}>
                    {locale === "en" ? "Search " : "მოძებნე "}
                </span>
                <span ref={typedElement} className={`text-[#191C20] dark:text-[#E2E2E9] uppercase ${mtavruli.className}`}></span>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();

                const queryStrings = new URLSearchParams();
                searchParams.forEach((value, key) => {
                    queryStrings.set(key, value);
                });
                queryStrings.set('q', query);
                router.replace(`/search?${queryStrings.toString()}`);
            }}>
                <div className="w-full flex bg-[#F9F9FF] dark:bg-[#121B18] gap-3 lg:gap-8 h-[60px] mt-[15px]">
                    <input placeholder={locale === "en" ? 'Search...' : 'ძებნა...'}
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                        className="flex-grow border-[#EC6652] border-[1.5px] outline-none text-[#191C20] text-sm text-color-[#000000b3] rounded-[12px] p-[6px] px-[12px] dark:bg-[#121B18] dark:text-[#E2E2E9]" />
                    <button type='submit' className={`bg-[#EC6652] text-white flex items-center justify-center gap-[5px] cursor-pointer w-[150px] rounded-[12px] ${mtavruli.className}`}>
                        <SearchOutlinedIcon />
                        {locale === "en" ? "Search" : "ძებნა"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;
