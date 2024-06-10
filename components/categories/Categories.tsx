"use client";
import Category from './Category';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import ActionFigure from '../../public/categories/actionFigure.png';
import BuildingSets from '../../public/categories/buildingSets.png';
import Dolls from '../../public/categories/doll.png';
import Educational from '../../public/categories/educational.png';
import Puzzle from '../../public/categories/puzzle.png';
import Outdoor from '../../public/categories/outdoor.png';
import Plushy from '../../public/categories/plushy.png';

import 'swiper/css/navigation';
import 'swiper/css';
import Image from 'next/image';

function Categories() {
    const categories: { categoryImg?: JSX.Element; name: string; description?: string }[] = [
        { name: 'Action Figures', description: 'Description 1', categoryImg: <Image src={ActionFigure} width={70} alt="Action Figure" className="m-[10px]" /> },
        { name: 'Building Sets', description: 'Description 2', categoryImg: <Image src={BuildingSets} width={70} alt="Building Sets" className="m-[10px]" /> },
        { name: 'Dolls', description: 'Description 3', categoryImg: <Image src={Dolls} width={40} alt="Dolls" className="m-[10px]" /> },
        { name: 'Educational', description: 'Description 4', categoryImg: <Image src={Educational} width={55} alt="Educational" className="m-[10px]" /> },
        { name: 'Puzzles', description: 'Description 5', categoryImg: <Image src={Puzzle} width={70} alt="Puzzle" className="m-[10px]" /> },
        { name: 'Outdoot Play', description: 'Description 6', categoryImg: <Image src={Outdoor} width={90} alt="Outdoor Play" className="m-[10px]" /> },
        { name: 'Plush Toys', description: 'Description 7', categoryImg: <Image src={Plushy} width={58} alt="Plush Toys" className="m-[10px]" /> },
    ];

    return (
        <div className="flex items-center space-x-6">
            <div>
                <Category
                    name="ყველა კატეგორია"
                    isAllCategory={true}
                />
            </div>
            <div className="swiper-button-custom-prev flex items-center justify-center w-5 h-5 p-4 text-[#EC6652] cursor-pointer transition duration-300 hover:bg-red-700"><KeyboardArrowLeftIcon fontSize="large" /></div>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={4}
                slidesPerView={4}
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
                            categoryImg={category.categoryImg}
                            name={category.name}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-custom-next flex items-center justify-center w-5 h-5 p-4 text-[#EC6652] cursor-pointer transition duration-300 hover:bg-red-700"><KeyboardArrowRightIcon fontSize="large" /></div>
        </div>
    );
}

export default Categories;
