"use client";
import Image from "next/image";
import TestProduct from "../../public/TestProduct.webp";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

interface CardProps {
  image: string | undefined;
  productName: string;
  price: number;
}

function Card({ image, productName, price }: CardProps) {
  const formattedPrice = typeof price === "number" ? price.toFixed(2) : parseFloat(price).toFixed(2);
  return (
    <div className="flex flex-col w-[190px] h-[265px] dark:bg-[#1D2024] shadow-lg justify-between rounded-lg py-[10px] px-[15px] cursor-pointer group relative">
      <div className="flex items-center justify-center mt-[15px] w-[160px] h-[168px]">
        <Image
          src={image ? image : TestProduct}
          alt="product"
          width={100}
          height={168}
          className="w-[100px]"
        />
      </div>
      <div className="font-bold mt-[14px] h-7">
        {formattedPrice} ₾
      </div>
      <div className="text-sm h-7">
        {productName}
      </div>
      <div className="absolute flex justify-center items-center border-[1px] border-[#404978] rounded-md p-1 right-1 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ShoppingCartIcon className="w-4 h-4 text-[#404978]" />
        {/* <DeleteIcon className="w-4 h-4 text-[#404978]" /> */}
        {/* <EditIcon className="w-4 h-4 text-[#404978]" /> */}
      </div>
    </div>
  );
}

export default Card;