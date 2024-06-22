"use client";

import { useRouter, useSearchParams } from 'next/navigation';

function CategoryFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category') || '';

    const activeStyle = "font-semibold text-[#EC6652]"
    const hoverStyle = "hover:font-semibold hover:text-[#EC6652]" 

    const categories: { [key: string]: string } = {
        "actionFigures": "Action Figures",
        "buildingSets": "Building Sets",
        "dolls": "Dolls",
        "educational": "Educational",
        "puzzles": "Puzzles",
        "outdoorPlay": "Outdoor play",
        "plushToys": "Plushy"
    }
    
    return (
        <div className="text-sm flex flex-col gap-[5px]">
            {Object.keys(categories).map((key) => (
                <span key={key} className={`cursor-pointer ml-[10px] ${category === key ? activeStyle : hoverStyle}`} onClick={() => {
                    if (category === key) {
                        console.log(category, key);
                        return;
                    }
                    
                    console.log(category, key);
                    const queryStrings = new URLSearchParams();
                    searchParams.forEach((value, key) => {
                        queryStrings.set(key, value);
                    });
                    queryStrings.set('category', key);

                    router.push(`/search?${queryStrings.toString()}`);
                }}>- {categories[key]}</span>
            ))}
        </div>
    )
}

export default CategoryFilter;