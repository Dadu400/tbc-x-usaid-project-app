"use client";

import React, { useEffect, useRef, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Typed from 'typed.js';

function SearchBar({ className }) {
    const [searchTerm, setSearchTerm] = useState('');
    const typedElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["თოჯინები", "ფაზლები", "წიგნები", "საკოლექციო თამაშები"],
            typeSpeed: 75,
            backSpeed: 75,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleButtonClick = () => {
        // Perform search logic here
    };

    return (
        <div className={className}>
            <div className="text-[#191C20] text-2xl font-['mtavruli']">
                <span className="font-semibold text-[#EC6652]">მოძებნე </span>
                <span ref={typedElement} className="text-[#191C20] dark:text-[#E2E2E9]"></span>
            </div>
            <div className="w-full flex bg-[#F9F9FF] dark:bg-[#121B18] gap-8 h-[60px] mt-[15px]">
                <input placeholder={'Search...'} className="flex-grow border-[#EC6652] border-[1.5px] outline-none text-[#191C20] text-sm text-color-[#000000b3] rounded-[12px] p-[6px] px-[12px] dark:bg-[#121B18] dark:text-[#E2E2E9]"></input>
                <div className="bg-[#EC6652] text-white flex items-center justify-center cursor-pointer w-[150px] rounded-[12px]">
                    <SearchOutlinedIcon />
                    ძებნა
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
