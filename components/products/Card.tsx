"use client";
import Image from "next/image";
import TestProduct from "../../public/TestProduct.webp";

interface CardProps {
  id: string | number;
  productName: string;
  price: number;
}

function Card({ id, productName, price }: CardProps) {
  const formattedPrice = typeof price === "number" ? price.toFixed(2) : parseFloat(price).toFixed(2);
  return (
    <div className="flex flex-col w-[190px] h-[265px] shadow-lg justify-between rounded-lg  py-[10px] px-[15px] cursor-pointer">
      <div className="flex items-center justify-center">
        <Image
          src={TestProduct}
          alt="product"
          className="w-[100px] "
        />
      </div>
      <div className="font-bold mt-[14px] h-7">
        {formattedPrice} ₾
      </div>
      <div className="text-sm h-7">
        {productName}
      </div>
    </div>
  );
}

export default Card;