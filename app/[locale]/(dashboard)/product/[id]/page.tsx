import Head from 'next/head';
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
import Image from 'next/image';
import SocialShareButtons from '../../../../../components/products/SocialShareButtons';
import { Metadata } from 'next';
import localFont from '@next/font/local';
import { Product } from '../../../../../components/products/Cart';
import { getProductSeller, getSingleProduct } from '../../../../../actions';
import CallIcon from '@mui/icons-material/Call';
import Link from 'next/link';

interface Params {
    id: string;
    locale: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const post = await getSingleProduct(params.id);
    return {
        title: post?.title || 'Product',
        description: post?.description || 'Product details',
    }
}

const mtavruli = localFont({ src: "../../../../../public/fonts/mtavruli.ttf" });

export default async function singleProduct({ params }: { params: Params }) {
    const product: Product = await getSingleProduct(params.id);
    const user = await getProductSeller(params.id);

    if (!product) {
        return (
            <DashboardLayout>
                <section className="w-full min-h-[646px] flex items-center justify-center py-10 px-8 shadow-xl dark:bg-black">
                    <p className="text-xl text-gray-900 dark:text-white">Product not found.</p>
                </section>
            </DashboardLayout>
        );
    }

    const shareUrl = `https://tbc-x-usaid-project-app.vercel.app/product/${product.id}`;
    const title = product.title;
    const imageUrl = product.image ? product.image : product;

    const formattedDate = new Date(product.added_on).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return (
        <>
            <Head>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={product.description} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:url" content={shareUrl} />
                <meta property="og:type" content="product" />
            </Head>
            <DashboardLayout useParticles={false}>
                <div className="bg-[#FEFEFE] flex w-[60vw] mx-auto gap-[30px] mt-[60px] p-6">
                    <div className="flex-[4]">
                        <div className="flex">
                            <div className="flex-[2] flex justify-center items-center">
                                <Image
                                    src={product.image ? product.image : product}
                                    alt="product"
                                    width={150}
                                    height={150}
                                    className="w-[150px] rounded-lg"
                                />
                            </div>
                            <div className="flex-[3]">
                                <div className="flex flex-col mx-[20px] mt-[25px]">
                                    <div className="text-sm text-gray-700 flex justify-between">
                                        <div><span className="text-[#1e90ff] font-semibold mr-[3px]">ID</span>{product.id}</div>
                                        <div className="flex gap-[5px]">
                                            <RemoveRedEyeOutlinedIcon fontSize="small" className="text-[#1e90ff] mr-[3px]" />
                                            <span>{Math.floor(Math.random() * 1000) + 1}</span>
                                        </div>
                                        <div className="flex gap-[5px]">
                                            <AccessTimeIcon fontSize="small" className="text-[#1e90ff] mr-[3px]" />
                                            <span>{formattedDate}</span>
                                        </div>
                                    </div>
                                    <span className="text-lg text-black font-bold mt-[15px]">{product.title}</span>
                                    <div className="flex items-center my-[5px]">
                                        <StarOutlinedIcon className="text-[#FFB200]" fontSize="small" />
                                        <StarOutlinedIcon className="text-[#FFB200]" fontSize="small" />
                                        <StarOutlinedIcon className="text-[#FFB200]" fontSize="small" />
                                        <StarOutlinedIcon className="text-[#FFB200]" fontSize="small" />
                                        <StarHalfOutlinedIcon className="text-[#FFB200]" fontSize="small" />
                                        <span className="text-sm ml-[5px] text-gray-500">(250)</span>
                                    </div>
                                    <span className="text-sm text-gray-800 font-normal mt-[15px]">
                                        {product.description}
                                    </span>
                                    <SocialShareButtons shareUrl={shareUrl} title={title} imageUrl={imageUrl} />
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
                <div className="bg-[#FEFEFE] mt-[60px] w-[60vw] mx-auto shadow-xl p-[25px] flex flex-col">
                    <span className="font-['mtavruli'] border-b-[#1e90ff] border-b-[2px] flex items-center gap-[8px] pb-[5px] w-[135px]">
                        <PersonIcon className="text-[#1e90ff]" /> გამყიდველი
                    </span>
                    <div className="w-full flex mt-[25px] justify-between items-center">
                        <div className="flex items-center gap-4">
                            <Image src={user.imageurl} alt={user.name + " " + user.surname} width={120} height={30} className="rounded-full border-2 cursor-pointer w-[120px] h-[120px]" />
                            <div className="flex flex-col ml-[20px]">
                                <span className={`text-lg font-bold ${mtavruli.className}`}>დადუკა ხუხუნაშვილი</span>
                                <span className={`text-md ${mtavruli.className}`}>{user.phone.startsWith('+995') || user.phone.startsWith('995') ? user.phone : '+995 ' + user.phone}</span>
                            </div>
                        </div>
                        <div>
                            <Link href={"tel:" + user.phone} className="mr-[25px] flex justify-center items-center gap-2">
                                <CallIcon className="text-[#1e90ff]" fontSize='small' />
                                <span className={`text-[#1e90ff] text-md ${mtavruli.className}`}>დაკავშირება</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FEFEFE] mt-[40px] flex w-[60vw] mx-auto shadow-xl p-[25px]">
                    <span className="font-['mtavruli'] border-b-[#1e90ff] border-b-[2px] flex items-center gap-[8px] pb-[5px] w-[135px]">
                        <StarIcon className="text-[#FFB200]" /> შეფასებებები
                    </span>
                </div>
                <div className="bg-[#FEFEFE] my-[40px] flex w-[60vw] mx-auto shadow-xl p-[25px]">
                    <span className="font-['mtavruli'] border-b-[#1e90ff] border-b-[2px] flex items-center gap-[8px] pb-[5px] w-[135px]">
                        <InsertCommentOutlinedIcon className="text-red" /> კომენტარები
                    </span>
                </div>
            </DashboardLayout>
        </>
    );
}
