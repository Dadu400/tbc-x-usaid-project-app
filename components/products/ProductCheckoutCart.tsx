import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import { Product } from './Cart';

function ProductCheckoutCart({ product }: { product: Product }) {
    return (
        <div className="flex-[2]">
            <div className="shadow-lg py-[40px] px-[35px] rounded-lg">
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <div>
                        <FavoriteBorderOutlinedIcon className="cursor-pointer" />
                    </div>
                </div>
                <hr className="my-[5px] mt-[15px]" />
                <div className="px-[10px] text-xl flex items-center gap-[10px]">
                    <DeliveryDiningOutlinedIcon />
                    <span className="text-xs">
                        <span className="font-semibold text-[#1e90ff]">უფასო მიწოდება</span> თბილისში
                    </span>
                </div>
                <hr className="my-[5px]" />
                <div className="flex justify-between items-center mt-[10px]">
                    <span className="text-sm font-['mtavruli']">რაოდენობა</span>
                    <div className="flex gap-3">
                        <div>
                            <RemoveOutlinedIcon className="text-gray-400 cursor-pointer" />
                        </div>
                        <div>1</div>
                        <div>
                            <AddOutlinedIcon className="text-gray-400 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-[20px] gap-[10px]">
                    <div className="w-[100%] text-center bg-[#1e90ff] text-white rounded-lg p-[10px] cursor-pointer">ყიდვა</div>
                    <div className="w-[100%] text-center border-[1px] border-[#1e90ff] text-[#1e90ff] font-semibold rounded-lg p-[9px] cursor-pointer">კალათაში დამატება</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCheckoutCart;