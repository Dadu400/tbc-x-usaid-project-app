"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import LegoEcho from "../../public/LegoEcho.png";
import { handleAddToCart } from "../../actions";

interface CardProps {
  id: string | number;
  productName: string;
  price: number;
}

function Card({ id, productName, price }: CardProps) {
  const locale = useLocale();

  return (
    <div className="flex flex-col justify-between rounded-lg shadow-md p-2 dark:bg-zinc-600">
      <div className="p-3 flex items-center justify-center">
        <Image
          width={200}
          height={200}
          src={LegoEcho}
          alt="product"
          className="w-54 h-48"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-black cursor-pointer font-medium text-base leading-6">
          {productName}
        </h3>
        <p className="font-bold text-lg leading-7">$ {price}</p>
        <Link href={`/home/singleproduct/${id}`}>
          <button className="w-full inline-flex items-center justify-center text-white dark:text-black bg-[#FD8024] border border-solid border-[#FD8024] rounded-sm px-4 py-3 font-medium text-lg leading-6 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
            {locale == "en" ? "Learn More" : "გაიგე მეტი"}
          </button>
        </Link>
        <button
          onClick={() => handleAddToCart(id.toString())}
          className="w-full inline-flex items-center justify-center text-white dark:text-black bg-[#FD8024] border border-solid border-[#FD8024] rounded-sm px-4 py-3 font-medium text-lg leading-6 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
        >
          {locale == "en" ? "Add to Cart" : "კალათაში დამატება"}
        </button>
      </div>
    </div>
  );
}

export default Card;