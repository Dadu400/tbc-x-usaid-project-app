"use client";

import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar({ className }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleButtonClick = () => {
        // Perform search logic here
    };

    return (
        <div className={className}>
            <div className="text-[#191C20] text-xl font-['mtavruli']">
                <span className="font-semibold">მოძებნე: </span>
                <span>სათამაშოები</span>
            </div>
            <div className="w-full flex bg-white gap-8 h-[60px] mt-[15px]">
                <input placeholder={'Search...'} className="flex-grow border-[#EC6652] border-[1.5px] outline-none text-black text-sm text-color-[#000000b3] rounded-[12px] p-[6px] px-[12px]"></input>
                <div className="bg-red text-white flex items-center justify-center cursor-pointer w-[150px] rounded-[12px]">
                    <SearchOutlinedIcon />
                    ძებნა
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
