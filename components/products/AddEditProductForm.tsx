"use client";

import { useState } from "react";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Card from './Card';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import UploadIcon from '@mui/icons-material/Upload';

function AddEditProductForm({ product = null, onBackClicked }: { product: any, onBackClicked: () => void }) {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(0);

    return (
        <div className="w-full flex flex-col border shadow-lg rounded-lg bg-[#FEFEFE] p-8">
            <div className="flex items-center justify-center">
                <ArrowBackOutlinedIcon className="text-3xl cursor-pointer" onClick={() => {
                    onBackClicked();
                }} />
                <span className="text-xl font-['mtavruli'] font-semibold text-center w-full">პროდუქტის {product == null ? "დამატება" : "რედაქტირება"}</span>
            </div>

            <div className='flex flex-col items-center justify-center mt-[30px]'>
                <span className="text-md text-center w-full mb-[20px]">ნიმუში:</span>
                <Card productName={productName} price={productPrice} />
            </div>

            <form className='w-[70%] mx-auto mt-[30px] flex flex-col gap-[10px]'>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-md">დასახელება</label>
                    <input type="text" id="name" value={productName} onChange={
                        (e) => {
                            setProductName(e.target.value);
                        }
                    } className="border border-gray-300 rounded-lg p-2 mt-1" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="text-md">აღწერა</label>
                    <input type="text" id="description" value={productDescription} onChange={(e) => {
                        setProductDescription(e.target.value);
                    }} className="border border-gray-300 rounded-lg p-2 mt-1" />
                </div>
                <div className="relative">
                    <label htmlFor="price" className="block text-md font-medium text-gray-700">ფასი</label>
                    <input
                        type="number"
                        id="price"
                        value={productPrice}
                        onChange={(e) => {
                            setProductPrice(Number(e.target.value));
                        }}
                        className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <AttachMoneyOutlinedIcon className="absolute right-2 top-10 text-gray-500 cursor-pointer" />
                </div>
                <div className='w-[80%] flex items-center mt-4'>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="hidden"
                    />
                    <label htmlFor="image" className="flex items-center cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm px-4 py-3">
                        <UploadIcon className="text-red mr-2" />
                        <span className="block text-md font-medium text-gray-700">ატვირთე პროდუქტის სურათი</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-[40%] self-center mt-[25px] px-4 py-3 text-md font-medium text-white bg-red rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                    შენახვა
                </button>
            </form>
        </div >
    )
}

export default AddEditProductForm