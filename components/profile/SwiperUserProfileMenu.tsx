'use client';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PasswordIcon from '@mui/icons-material/Password';
import HistoryIcon from '@mui/icons-material/History';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
import SwiperUserMenuSlide from './SwiperUserMenuSlide';

import 'swiper/css/navigation';
import 'swiper/css';

function SwiperUserProfileMenu({ selectedItem }: { selectedItem: string }) {
    const menuItems = [
        {
            id: "profile",
            icon: <PersonOutlineIcon />,
            title: "პროფილი",
            route: "/profile"
        },
        {
            id: "password",
            icon: <PasswordIcon />,
            title: "პაროლი",
            route: "/profile/password"
        },
        {
            id: "orders",
            icon: <HistoryIcon />,
            title: "შეკვეთები",
            route: "/profile/orders"
        },
        {
            id: "products",
            icon: <Inventory2OutlinedIcon />,
            title: "პროდუქტები",
            route: "/profile/products"
        },
        {
            id: "blogs",
            icon: <FeedOutlinedIcon />,
            title: "ბლოგები",
            route: "/profile/blogs"
        },
    ]

    return (
        <div className="flex justify-between items-center bg-white dark:bg-[#1D2024] shadow-lg rounded py-5 gap-[20px]">
            <div className="swiper-button-custom-prev flex items-center justify-center w-5 h-5 p-4 text-[#1D90FF] dark:text-[#EC6652] cursor-pointer transition duration-300 hover:bg-red-700"><KeyboardArrowLeftIcon fontSize="large" /></div>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={15}
                slidesPerView={3}
                navigation={{
                    nextEl: '.swiper-button-custom-next',
                    prevEl: '.swiper-button-custom-prev'
                }}
                className="w-full h-full flex items-center justify-center flex-row gap-[15px]"
            >
                {menuItems.map((menuItem, index) => (
                    <SwiperSlide key={index}>
                        <SwiperUserMenuSlide
                            icon={menuItem.icon}
                            title={menuItem.title}
                            route={menuItem.route}
                            isSelected={selectedItem === menuItem.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-custom-next flex items-center justify-center w-5 h-5 p-4 text-[#1D90FF] dark:text-[#EC6652] cursor-pointer transition duration-300 hover:bg-red-700"><KeyboardArrowRightIcon fontSize="large" /></div>
        </div>
    )
}

export default SwiperUserProfileMenu;