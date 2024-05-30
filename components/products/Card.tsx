"use client";
import Image from "next/image";
import Link from "next/link";
import TestProduct from "../../public/TestProduct.webp";
import { handleAddToCart } from "../../actions";

interface CardProps {
  id: string | number;
  productName: string;
  price: number;
}

function Card({ id, productName, price }: CardProps) {

  return (
    <div className="flex flex-col w-[180px] justify-between rounded-lg  py-[10px] px-[15px] cursor-pointer">
      <div className="flex items-center justify-center">
        <Image
          src={TestProduct}
          alt="product"
          className="w-[100px] "
        />
      </div>
      <div className="font-bold mt-[10px]">
        {price} ₾
      </div>
      <div className="text-sm">
        {productName}
      </div>
    </div>
  );
}

export default Card;