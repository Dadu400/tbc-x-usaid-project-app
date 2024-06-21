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
import { useEffect, useState } from 'react';

import { useLocale } from 'next-intl';

function Categories() {
    const locale = useLocale();

     const categories = [
    { 
      name: locale === 'en' ? 'Action Figures' : 'აქშენ ფიგურები', 
      description: locale === 'en' ? 'Description 1' : 'აღწერა 1', 
      categoryImg: <Image src={ActionFigure} width={70} alt="Action Figure" className="m-[10px]" /> 
    },
    { 
      name: locale === 'en' ? 'Building Sets' : 'აშენების ნაკრები', 
      description: locale === 'en' ? 'Description 2' : 'აღწერა 2', 
      categoryImg: <Image src={BuildingSets} width={70} alt="Building Sets" className="m-[10px]" /> 
    },
    { 
      name: locale === 'en' ? 'Dolls' : 'თოჯინები', 
      description: locale === 'en' ? 'Description 3' : 'აღწერა 3', 
      categoryImg: <Image src={Dolls} width={40} alt="Dolls" className="m-[10px]" /> 
    },
    { 
      name: locale === 'en' ? 'Educational' : 'საგანმანათლებლო', 
      description: locale === 'en' ? 'Description 4' : 'აღწერა 4', 
      categoryImg: <Image src={Educational} width={55} alt="Educational" className="m-[10px]" /> 
    },
    { 
      name: locale === 'en' ? 'Puzzles' : 'ფაზლები', 
      description: locale === 'en' ? 'Description 5' : 'აღწერა 5', 
      categoryImg: <Image src={Puzzle} width={70} alt="Puzzle" className="m-[10px]" /> 
    },
    { 
      name: locale === 'en' ? 'Outdoor Play' : 'გარე თამაშები', 
      description: locale === 'en' ? 'Description 6' : 'აღწერა 6', 
      categoryImg: <Image src={Outdoor} width={90} alt="Outdoor Play" className="m-[10px]" /> 
    },
    { 
      name: locale === 'en' ? 'Plush Toys' : 'რბილი სათამაშოები', 
      description: locale === 'en' ? 'Description 7' : 'აღწერა 7', 
      categoryImg: <Image src={Plushy} width={58} alt="Plush Toys" className="m-[10px]" /> 
    }
  ];
    const [screenWidth, setScreenWidth] = useState(window === undefined ? 0 : window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex items-center space-x-4">
            <div>
                <Category
                    name={locale === 'en' ? 'All Categories' : 'ყველა კატეგორია'}
                    isAllCategory={true}
                />
            </div>
            <div className="swiper-button-custom-prev flex items-center justify-center w-5 h-5 p-4 text-[#EC6652] cursor-pointer transition duration-300 hover:bg-red-700"><KeyboardArrowLeftIcon fontSize="large" /></div>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={4}
                slidesPerView={screenWidth > 1120 ? 4 : screenWidth > 870 ? 3 : screenWidth > 655 ? 2 : 1}
                navigation={{
                    nextEl: '.swiper-button-custom-next',
                    prevEl: '.swiper-button-custom-prev'
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            // centeredSlides={true}
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
