import React from 'react';
import localFont from '@next/font/local'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

interface CategoryProps {
    categoryImg?: any;
    name: string;
    isAllCategory?: boolean;
}

function Category({ name, isAllCategory, categoryImg }: CategoryProps) {
    return (
        <div className={`w-[140px] h-[160px] flex flex-col font-medium tracking-wider items-center py-[40px] mx-auto rounded-[10px] cursor-pointer ` + (isAllCategory ? "bg-[#EC6652] justify-center text-white" : "bg-[#EAEAEA] dark:bg-[#1D2024] dark:text-[#E2E2E9] ")} style={{ position: 'relative' }}>
            {isAllCategory ? <span><FormatListBulletedIcon fontSize="large" /></span> : <></>}
            <span className={`${mtavruli.className} text-center text-[13px] px-[10px]` + (isAllCategory ? " mt-[20px]" : "")}>{name}</span>
            {categoryImg && (
                <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    {categoryImg}
                </div>
            )}
        </div>
    );
};

export default Category;