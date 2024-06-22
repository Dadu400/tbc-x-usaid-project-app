"use client";

import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Banner from '../banner/Banner'

import FirstBannerLong from '../../public/firstBannerLong.png'
import FirstBannerLongEn from '../../public/firstBannerLongEn.png'
import ProductList, { Product } from '../products/ProductList'

import localFont from '@next/font/local'
import ExpandableFilter from './ExpandableFilter'
import PriceFilter from './PriceFilter'
import RatingFilter from './RatingFilter'
import CategoryFilter from './CategoryFilter'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation';
import EmptySearch from './EmptySearch';
import { getProducts } from '../../helpers/axiosProduct';

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function SearchPage() {
    const searchParams = useSearchParams();

    const t = useTranslations("SearchPage");

    const query = searchParams.get('q') || '';
    const category = searchParams.get('category') || '';
    const price = searchParams.get('price') || '';
    const rating = searchParams.get('rating') || '';

    const [products, setProducts] = useState<Product[] | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const searchResult = await getProducts();
            setProducts(searchResult);
        };
        fetchData();
    }, [query, category, price, rating]);

    return (
        <div className='w-[62vw] mx-auto bg-[#F9F9FF] dark:bg-[#121B18] px-[1vw] py-[25px]'>
            <SearchBar className={"mb-[35px]"} />
            <Banner bannerEn={FirstBannerLongEn} bannerKa={FirstBannerLong} />
            <div className="w-[100%] mt-[35px] flex justify-between items-center">
                <div className="text-sm text-[#EC6652] font-semibold">{t('totalResults', { total: '25' })}</div>
                <select id="sortedBy" className="px-[10px] py-[7px] text-sm rounded border-[1.5px] border-[#0000001a] dark:border-[#ffffff26] bg-[#F9F9FF] dark:bg-[#121B18]">
                    <option value="dateDesc">{t('dateDesc')}</option>
                    <option value="dateAsc">{t('dateAsc')}</option>
                    <option value="priceDesc">{t('priceDesc')}</option>
                    <option value="priceAsc">{t('priceAsc')}</option>
                </select>
            </div>
            <div className="w-full mt-[15px] flex gap-[35px] items-start">
                <div className="w-full flex-[1] flex flex-col border rounded py-[15px] px-[25px]">
                    <span className={`text-center text-md font-semibold ${mtavruli.className}`}>{t('filter')}</span>
                    <ExpandableFilter title={"Categories"} component={<CategoryFilter />} className="mt-[25px]" expandedByDefault={category !== ''} />
                    <ExpandableFilter title={"Price"} component={<PriceFilter />} className="mt-[15px]" expandedByDefault={price !== ''} />
                    <ExpandableFilter title={"Rating"} component={<RatingFilter />} className="mt-[15px]" expandedByDefault={rating !== ''} />
                </div>
                <div className="w-full flex-[4] justify-center items-center flex border rounded p-[15px]">
                    {products === undefined && <div>
                        </div>}
                    {products && products.length === 0 && <EmptySearch />}
                    {products && products.length > 0 && <ProductList colCount={3} />}
                </div>
            </div>

        </div>
    )
}

export default SearchPage