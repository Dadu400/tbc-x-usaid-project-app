"use client";

import Image from "next/image";
import TestProduct from "../../public/TestProduct.webp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DeleteProduct, handleAddToCart } from "../../actions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Product } from "./ProductList";

interface CardProps {
  product: Product;
  session: any;
}

function ProductCard({ product, session }: CardProps) {
  const formattedPrice =
    typeof product.price === "number" ? product.price.toFixed(2) : parseFloat(product.price).toFixed(2);

  const router = useRouter();

  const isUserAuthorized = session && session.user;
  const isUsersProduct = session && session.user && Number(session.user.id) === Number(product.userid);
  const isAdmin = session && session.user && session.user.admin === true;

  return (
    <div className="flex flex-col w-[190px] h-[265px] dark:bg-[#1D2024] shadow-lg justify-between rounded-lg py-[10px] px-[15px] cursor-pointer group relative">
      <Link href={`/product/${product.id}`}>
        <div className="flex items-center justify-center mt-[15px] w-[160px] h-[168px]">
          <Image
            src={product.image ? product.image : TestProduct}
            alt="product"
            width={100}
            height={168}
            className="w-[100px]"
          />
        </div>
        <div className="font-bold mt-[14px] h-7">{formattedPrice} ₾</div>
        <div className="text-sm h-7 overflow-hidden whitespace-nowrap overflow-ellipsis">{product.title}</div>
      </Link>
      <div className="absolute flex flex-col gap-[5px] justify-center items-center right-1 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {isUserAuthorized && !(isUsersProduct || isAdmin) ? (
          <div
            className="flex justify-center items-center border-[1px] border-[#404978] rounded-md p-1"
            onClick={() => handleAddToCart(product.id.toString())}
          >
            <ShoppingCartIcon fontSize="small" className="text-[#404978]" />
          </div>
        ) : <></>}
        {(isUsersProduct || isAdmin) && (
          <div className="flex justify-center items-center border-[1px] border-[#404978] rounded-md p-1" onClick={() => {
            router.push(`/profile/products/edit/${product.id}`);
          }}>
            <EditIcon fontSize="small" className="text-[#404978]" />
          </div>
        )}
        {(isUsersProduct || isAdmin) && (
          <div className="flex justify-center items-center border-[1px] border-red rounded-md p-1 bg-red" onClick={async () => {
            const result = await DeleteProduct({ id: product.id });
            if (result.ok) {
              router.refresh();
            }
          }}>
            <DeleteOutlineIcon fontSize="small" className="text-white" />
          </div>
        )}

      </div>
    </div>
  );
}

export default ProductCard;
