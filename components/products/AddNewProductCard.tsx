"use client";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useLocale } from 'next-intl';

function AddNewProductCard() {
    const locale = useLocale();
    return (
        <div className="flex items-center flex-col justify-center w-[190px] h-[265px] bg-[#EC6652] rounded-lg text-white gap-3 cursor-pointer mx-auto">
            <AddOutlinedIcon className="text-3xl" />
            <div>{locale === "en" ? "New Product" : "პროდუქტის დამატება"}</div>
        </div>
    )
}

export default AddNewProductCard;