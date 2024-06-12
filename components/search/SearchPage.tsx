import React from 'react'
import SearchBar from './SearchBar'
import Banner from '../banner/Banner'

import FirstBannerLong from '../../public/firstBannerLong.png'
import FirstBannerLongEn from '../../public/firstBannerLongEn.png'
import ProductList from '../products/ProductList'

import localFont from '@next/font/local'
import ExpandableFilter from './ExpandableFilter'
import PriceFilter from './PriceFilter'
import RatingFilter from './RatingFilter'
import CategoryFilter from './CategoryFilter'
import EmptySearch from './EmptySearch'
import MyProductsList from '../profile/MyProductsList'

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function SearchPage() {
    return (
        <div className='w-[62vw] mx-auto bg-[#F9F9FF] dark:bg-[#121B18] px-[1vw] py-[25px]'>
            <SearchBar className={"mb-[35px]"} />
            <Banner bannerEn={FirstBannerLongEn} bannerKa={FirstBannerLong} />
            <div className="w-[100%] mt-[35px] flex justify-between items-center">
                <div className="text-sm text-[#EC6652] font-semibold">სულ 25 განცხადება</div>
                <select id="sortedBy" className="px-[10px] py-[7px] text-sm rounded border-[1.5px] border-[#0000001a] dark:border-[#ffffff26] bg-[#F9F9FF] dark:bg-[#121B18]">
                    <option value="dateDesc">თარიღი კლებადი</option>
                    <option value="dateAsc">თარიღი ზრდადი</option>
                    <option value="priceDesc">ფასი კლებადი</option>
                    <option value="priceAsc">ფასი ზრდადი</option>
                </select>
            </div>
            <div className="w-full mt-[15px] flex gap-[35px] items-start">
                <div className="w-full flex-[1] flex flex-col border rounded py-[15px] px-[25px]">
                    <span className={`text-center text-md font-semibold ${mtavruli.className}`}>ფილტრი</span>
                    <ExpandableFilter title={'კატეგორია'} component={<CategoryFilter />} className="mt-[25px]" />
                    <ExpandableFilter title={'ფასი'} component={<PriceFilter />} className="mt-[15px]" />
                    <ExpandableFilter title={'შეფასება'} component={<RatingFilter />} className="mt-[15px]" />
                </div>
                <div className="w-full flex-[4] justify-center items-center flex border rounded p-[15px]">
                    {/* <EmptySearch /> */}
                    <ProductList colCount={4} />
                </div>
            </div>

        </div>
    )
}

export default SearchPage