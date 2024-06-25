"use client";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import { useState } from 'react';
import { handleAddToCart, handleInstantBuy } from '../../actions';
import { useRouter } from 'next/navigation';
import { Product } from './ProductList';

function ProductCheckoutCart({ session, product }: { session: any, product: Product }) {
    const router = useRouter();
    const [productCount, setProductCount] = useState(1);

    const isUserAuthorized = session && session.user;
    const isUsersProduct = session && session.user && Number(session.user.id) === Number(product.userid);
    const isAdmin = session && session.user && session.user.admin === true;

    const canPurchaseOrAddToCart = () => {
        return isUserAuthorized && !isAdmin && !isUsersProduct;
    }

    return (
        <div className="flex-[2]">
            <div className="shadow-lg py-[40px] px-[35px] rounded-lg">
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <div>
                        <FavoriteBorderOutlinedIcon className="cursor-pointer" />
                    </div>
                </div>
                <hr className="my-[5px] mt-[15px]" style={{ borderColor: "#ffffff1f" }} />
                <div className="px-[10px] text-xl flex items-center gap-[10px]">
                    <DeliveryDiningOutlinedIcon />
                    <span className="text-xs">
                        <span className="font-semibold text-[#1e90ff]">უფასო მიწოდება</span> თბილისში
                    </span>
                </div>
                <hr className="my-[5px]" style={{ borderColor: "#ffffff1f" }} />
                <div className="flex justify-between items-center mt-[10px]">
                    <span className="text-sm font-['mtavruli']">რაოდენობა</span>
                    <div className="flex gap-3">
                        <div onClick={() => {
                            if (canPurchaseOrAddToCart() === false) {
                                return;
                            }

                            if (productCount > 1) {
                                setProductCount(productCount - 1);
                            }
                        }}>
                            <RemoveOutlinedIcon className="text-gray-400 cursor-pointer" />
                        </div>
                        <div>{productCount}</div>
                        <div onClick={() => {
                            if (canPurchaseOrAddToCart() === false) {
                                return;
                            }

                            setProductCount(productCount + 1);
                        }}>
                            <AddOutlinedIcon className="text-gray-400 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-[20px] gap-[10px]">
                    <div className={`w-[100%] text-center ${canPurchaseOrAddToCart() ? "bg-[#1e90ff] cursor-pointer" : "bg-[#86c2fc]"} text-white rounded-lg p-[10px] `} onClick={async () => {
                        if (canPurchaseOrAddToCart() === false) {
                            return;
                        }

                        const result = await handleInstantBuy(product.id.toString(), productCount);
                        if (result && result.ok) {
                            router.push("/cart");
                        }
                    }}>ყიდვა</div>
                    <div className={`w-[100%] text-center border-[1px] dark:text-white ${canPurchaseOrAddToCart() ? "border-[#1e90ff] text-[#1e90ff] cursor-pointer" : "border-[#86c2fc] text-[#86c2fc]"} rounded-lg p-[9px] `}
                        onClick={() => {
                            if (canPurchaseOrAddToCart() === false) {
                                return;
                            }

                            handleAddToCart(product.id.toString());
                        }}>კალათაში დამატება</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCheckoutCart;