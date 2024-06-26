'use client';

import { useEffect, useState } from "react";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ProductCard from './ProductCard';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import { SaveProduct, UpdateProduct } from "../../actions";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import type { PutBlobResult } from '@vercel/blob';
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Product } from "./ProductList";
import { getProducts } from "../../helpers/axiosProduct";
import SupermanLoader from "../../public/superman_loading.gif";
import Image from "next/image";
import { useLocale } from "next-intl";
import localFont from "@next/font/local";

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function AddEditProductForm({ isEdit, session }: { isEdit: boolean, session: any }) {
    const router = useRouter();
    const locale = useLocale();

    const [product, setProduct] = useState<Product | null>(null);
    const { id } = useParams();

    useEffect(() => {
        if (isEdit === false) {
            return;
        }
        const fetchProduct = async () => {
            const products = await getProducts();
            const data = products.find((p: Product) => p.id === Number(id));

            if (Number(data.userid) !== Number(session.user.id) && session.user.admin === false) {
                router.push('/profile/products');
                return;
            }

            setProduct(data);
            setProductTitle(data.title);
            setProductDescription(data.description);
            setProductPrice(data.price);
            setProductCategory(data.category);
        };

        fetchProduct();
    }, [id, isEdit, router, session.user.admin, session.user.id]);

    const [newUploadedProductImage, setNewUploadedProductImage] = useState<File | undefined>(undefined);
    const [productTitle, setProductTitle] = useState(product ? product.title : "");
    const [productDescription, setProductDescription] = useState(product ? product.description : "");
    const [productPrice, setProductPrice] = useState(product ? product.price : 0);
    const [productCategory, setProductCategory] = useState(product ? product.category : "");
    const [errorMessage, setErrorMessage] = useState('');

    const handleProductImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setNewUploadedProductImage(file);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (newUploadedProductImage == null && isEdit === false) {
            setErrorMessage('აირჩიეთ პროდუქტის სურათი');
            return;
        }

        let imageUrl = isEdit && newUploadedProductImage === undefined ? product?.image : undefined;
        if (imageUrl === undefined) {
            if (newUploadedProductImage == null) {
                setErrorMessage('აირჩიეთ პროდუქტის სურათი');
                return;
            }
            const response = await fetch(`/api/upload?filename=${newUploadedProductImage.name}`, {
                method: 'POST',
                body: newUploadedProductImage,
            });

            const newBlob = (await response.json()) as PutBlobResult;
            imageUrl = newBlob.url;
        }


        const formData = {
            productId: product?.id,
            title: productTitle,
            description: productDescription,
            price: productPrice,
            category: productCategory,
            image: imageUrl,
            userId: session.user.id
        };

        const saveStatus = isEdit ? await UpdateProduct(formData) : await SaveProduct(formData);
        if (saveStatus.ok) {
            router.push('/profile/products');
            router.refresh();
        } else {
            if (saveStatus.message) {
                setErrorMessage(saveStatus.message);
            } else {
                setErrorMessage('პროდუქტის შენახვა ვერ მოხერხდა, სცადეთ მოგვიანებით');
            }
        }
    };

    if (isEdit && product == null) {
        return <div className="flex justify-center items-center pt-5">
            <Image src={SupermanLoader}
                unoptimized={true} alt="Loading" width={200} height={200} />
        </div>;
    }

    return (
        <div className="w-full flex flex-col border dark:border-[#ffffff1f] shadow-lg rounded-lg bg-[#FEFEFE] dark:bg-[#1D2024] p-8">
            <div className="flex items-center justify-center">
                <Link href={"/profile/products"} >
                    <ArrowBackOutlinedIcon className="text-3xl cursor-pointer" />
                </Link>
                <span className={`text-2xl ${mtavruli.className} uppercase font-semibold mb-[20px] text-center w-full`}>
                    {locale == "en" ? "Product" : "პროდუქტის "}  {product ? (locale == "en" ? "Edit" : "რედაქტირება") : (locale == "en" ? "Add" : "დამატება")}
                </span>
            </div>

            <div className='flex flex-col items-center justify-center mt-[30px]'>
                <span className="text-md text-center w-full mb-[20px]">{locale == "en" ? "Example:" : "ნიმუში:"} </span>
                <ProductCard
                    product={{
                        id: 0,
                        image: newUploadedProductImage ? URL.createObjectURL(newUploadedProductImage) : product ? product.image : '',
                        title: productTitle,
                        description: productDescription,
                        price: productPrice,
                        category: productCategory,
                        userid: session.user.id,
                        added_on: new Date()
                    }} session={session} />
            </div>

            <form onSubmit={handleSubmit} className='w-[70%] mx-auto mt-[30px] flex flex-col gap-[10px]'>
                {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-md"> {locale == "en" ? "Product Name" : "დასახელება"}</label>
                    <input
                        type="text"
                        id="title"
                        value={productTitle}
                        onChange={(e) => setProductTitle(e.target.value)}
                        className="bg-white dark:bg-[#1D2024] border border-gray-300 dark:border-[#ffffff1f] rounded-lg p-2 mt-1"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="text-md"> {locale == "en" ? "Description" : "აღწერა"}</label>
                    <input
                        type="text"
                        id="description"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        className="bg-white dark:bg-[#1D2024] border border-gray-300 dark:border-[#ffffff1f] rounded-lg p-2 mt-1"
                        required
                    />
                </div>
                <div className="relative">
                    <label htmlFor="price" className="block text-md font-medium "> {locale == "en" ? "Price" : "ფასი"}</label>
                    <input
                        type="number"
                        id="price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(Number(e.target.value))}
                        className="mt-2 block w-full px-3 py-2 bg-white dark:bg-[#1D2024] border border-gray-300 dark:border-[#ffffff1f] rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        required
                    />
                    <AttachMoneyOutlinedIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" />
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="category" className="text-md"> {locale == "en" ? "Category" : "კატეგორია"}</label>
                    <select
                        name="category"
                        id="category"
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        className="bg-white dark:bg-[#1D2024] border border-gray-300 dark:border-[#ffffff1f] rounded-lg p-2 mt-1 cursor-pointer appearance-none"
                        required
                    >
                        <option value="" disabled> {locale == "en" ? "Choose Category" : "აირჩიეთ კატეგორია"}</option>
                        <option value="actionFigures"> {locale == "en" ? "Action Figures" : "ექშენ ფიგურები"}</option>
                        <option value="tableGames"> {locale == "en" ? "Table Games" : "სამაგიდო თამაშები"}</option>
                        <option value="dolls"> {locale == "en" ? "Dolls" : "თოჯინები"}</option>
                        <option value="educational"> {locale == "en" ? "Educational" : "შემეცნებითი"}</option>
                        <option value="puzzles"> {locale == "en" ? "Puzzles" : "ფაზლები"}</option>
                        <option value="outdoorplay"> {locale == "en" ? "Outdoor Play" : "ეზოს სათამაშოები"}</option>
                        <option value="plushtoys"> {locale == "en" ? "Plush Toys" : "რბილი სათამაშოები"}</option>
                    </select>
                    <KeyboardArrowDownIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" />
                </div>
                <div className='w-[80%] flex items-center mt-4'>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="hidden"
                        onChange={handleProductImageUpload}
                    />
                    <label htmlFor="image" className="flex items-center cursor-pointer bg-white dark:bg-[#1D2024] border dark:border-[#ffffff1f] rounded-md shadow-sm px-4 py-3">
                        <UploadIcon className="text-[#EC6652] mr-2" />
                        <span className="block text-md font-medium"> {locale == "en" ? "Upload Product Image" : "ატვირთე პროდუქტის სურათი"}</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-[40%] self-center mt-[25px] px-4 py-3 text-md font-medium text-white bg-[#EC6652] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                    {locale == "en" ? "Save" : "შენახვა"}
                </button>
            </form>
        </div>
    )
}

export default AddEditProductForm;
