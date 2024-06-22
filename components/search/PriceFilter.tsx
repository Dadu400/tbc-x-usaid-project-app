import React from 'react';

function PriceFilter() {
    return (
        <div className="flex flex-col gap-[10px] w-full">
            <input type="number" placeholder="from" className="border-[1px] rounded px-[10px] py-[5px] text-sm bg-white dark:text-[#191C20]" />
            <input type="number" placeholder="to" className="border-[1px] rounded px-[10px] py-[5px] text-sm bg-white dark:text-[#191C20]" />
        </div>
    )
}

export default PriceFilter;