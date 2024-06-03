"use client";
import Category from './Category';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import 'swiper/css/navigation';
import 'swiper/css';

function Categories() {
    const categories: { icon?: JSX.Element; name: string; description?: string }[] = [
        { icon: <></>, name: 'Category 1', description: 'Description 1' },
        { name: 'Category 2', description: 'Description 2' },
        { name: 'Category 3', description: 'Description 3' },
        { name: 'Category 4', description: 'Description 4' },
        { name: 'Category 5', description: 'Description 5' },
        { name: 'Category 6', description: 'Description 6' },
    ];

    return (
        <div className="flex items-center space-x-6">
            <div>
                <Category
                    icon={<FormatListBulletedIcon fontSize="large" />}
                    name="ყველა კატეგორია"
                    isAllCategory={true}
                />
            </div>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={2}
                slidesPerView={5}
                navigation={{
                    nextEl: '.swiper-button-custom-next',
                    prevEl: '.swiper-button-custom-prev'
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <Category
                            icon={<></>}
                            name={category.name}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-custom-prev flex items-center justify-center w-5 h-5 p-4 text-red border-red border-[1px] rounded-full cursor-pointer transition duration-300 hover:bg-red-700"><KeyboardArrowLeftIcon /></div>
            <div className="swiper-button-custom-next flex items-center justify-center w-5 h-5 p-4 text-red border-red border-[1px]  rounded-full cursor-pointer transition duration-300 hover:bg-red-700"><KeyboardArrowRightIcon /></div>
        </div>
    );
}

export default Categories;
