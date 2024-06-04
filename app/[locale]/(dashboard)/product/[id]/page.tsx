import DashboardLayout from '../../DashboardLayout';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import product from '../../../../../public/product.jpg';

import Image from 'next/image';

function ProductPage() {
    // const [productCounter, setProductCounter] = useState(1);

    return (
        <DashboardLayout useParticles={false} >
            <div className="bg-[#FEFEFE] mt-[60px] flex w-[60vw] mx-auto gap-[30px]">
                <div className="flex-[4]">
                    <span className="text-sm text-gray-700">ტექნიკა • საოჯახო • ტექნიკა • გათბობა და გაგრილება • კონდიციონერი</span>
                    <div className="flex">
                        <div className="flex-[2]">
                            <Image src={product} alt="product" width={100} height={100} className="w-[100%] rounded-lg" />
                        </div>
                        <div className="flex-[3]">
                            <div className="flex flex-col mx-[20px] mt-[25px]">
                                <div className="text-sm text-gray-700 flex justify-between">
                                    <div><span className="text-[#1e90ff] font-semibold mr-[3px]">ID</span> 124124</div>
                                    <div className="flex gap-[5px]">
                                        <RemoveRedEyeOutlinedIcon fontSize="small" className="text-[#1e90ff] mr-[3px]" />
                                        <span>250</span>
                                    </div>
                                    <div className="flex gap-[5px]">
                                        <AccessTimeIcon fontSize="small" className="text-[#1e90ff] mr-[3px]" />
                                        <span>04/06/2024</span>
                                    </div>
                                </div>
                                <span className="text-lg text-black font-bold mt-[15px]">Midea AG-12N8C2 Ioniser/Black 35-40 მ² ინვერტორული კონდიციონერი</span>
                                {/* <div className="flex items-center gap-2 my-[15px] self-start">
                                    <Image src={person} alt="author" className="w-12 h-12" />
                                    <div className="flex flex-col">
                                        <span className="text-gray-700 text-sm">
                                            Author Name
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-500 text-xs">9 min read</span>
                                            <span className="text-gray-500 text-md">·</span>
                                            <span className="text-gray-500 text-xs"> Nov 23, 2023</span>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="flex items-center my-[5px]">
                                    <StarOutlinedIcon className="text-[#FFB200]" fontSize="small" />
                                    <StarOutlinedIcon className="text-[#FFB200]" fontSize="small" />
                                    <StarOutlinedIcon className="text-[#FFB200]" fontSize="small" />
                                    <StarOutlinedIcon className="text-[#FFB200]" fontSize="small" />
                                    <StarHalfOutlinedIcon className="text-[#FFB200]" fontSize="small" />
                                    <span className="text-sm ml-[5px] text-gray-500">(250)</span>
                                </div>
                                <span className="text-sm text-gray-800 font-normal mt-[15px]">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-[2]">
                    <div className="shadow-lg py-[40px] px-[35px] rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold">1,500 ₾</span>
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
                                {/* <div onClick={() => { setProductCounter(productCounter - 1) }}> */}
                                <div>
                                    <RemoveOutlinedIcon className="text-gray-400 cursor-pointer" />
                                </div>
                                <div>1</div>
                                {/* <div onClick={() => { setProductCounter(productCounter + 1) }}> */}
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
            </div>
            <div className="bg-[#FEFEFE] mt-[60px] flex w-[60vw] mx-auto shadow-xl p-[25px]">
                <span className="font-['mtavruli'] border-b-[#1e90ff] border-b-[2px] flex items-center gap-[8px] pb-[5px]">
                    <PersonIcon className="text-[#1e90ff]" /> გამყიდველი
                </span>

            </div>
            <div className="bg-[#FEFEFE] mt-[40px] flex w-[60vw] mx-auto shadow-xl p-[25px]">
                <span className="font-['mtavruli'] border-b-[#1e90ff] border-b-[2px] flex items-center gap-[8px] pb-[5px]">
                    <StarIcon className="text-[#FFB200]" /> შეფასებებები
                </span>
            </div><div className="bg-[#FEFEFE] mt-[40px] flex w-[60vw] mx-auto shadow-xl p-[25px]">
                <span className="font-['mtavruli'] border-b-[#1e90ff] border-b-[2px] flex items-center gap-[8px] pb-[5px]">
                    <InsertCommentOutlinedIcon className="text-red" /> კომენტარები
                </span>
            </div>
        </DashboardLayout>
    );
}

export default ProductPage;