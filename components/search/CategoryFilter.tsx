"use client";

import { useLocale } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';

function CategoryFilter() {
    const locale = useLocale();

    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category') || '';

    const activeStyle = "font-semibold text-[#EC6652]"
    const hoverStyle = "hover:font-semibold hover:text-[#EC6652]"

    const categories: { [key: string]: string } = {
        "": locale === 'en' ? "All" : "ყველა",
        "actionFigures": locale === 'en' ? "Action Figures" : "ექშენ ფიგურები",
        "buildingSets": locale === 'en' ? "Building Sets" : "სამაგიდო თამაშები",
        "dolls": locale === 'en' ? "Dolls" : "თოჯინები",
        "educational": locale === 'en' ? "Educational" : "შემეცნებითი",
        "puzzles": locale === 'en' ? "Puzzles" : "ფაზლები",
        "outdoorPlay": locale === 'en' ? "Outdoor Play" : "ეზოს სათამაშოები",
        "plushToys": locale === 'en' ? "Plush Toys" : "რბილი თოჯინები",
    }

    return (
        <div className="text-sm flex flex-col gap-[5px]">
            {Object.keys(categories).map((key) => (
                <span key={key} className={`cursor-pointer ml-[10px] ${category === key ? activeStyle : hoverStyle}`} onClick={() => {
                    if (category === key) {
                        return;
                    }

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