import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SocialShareButtons from './SocialShareButtons';
import Image from 'next/image';
import { Product } from './Cart';
import { Review } from './ProductReviewDetails';
import Rating from '@mui/material/Rating';

interface ProductInfoProps {
    reviews: Review[];
    product: Product;
    shareUrl: string;
    title: string;
    imageUrl: string;
}

function ProductInfo({ reviews, product, shareUrl, title, imageUrl }: ProductInfoProps) {
    const formattedDate = new Date(product.added_on).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const reviewsCount = reviews.length;
    const rating = reviews.reduce((acc, review) => {
        return acc + Number(review.rating);
    }, 0) / reviewsCount;

    return (
        <div className="flex-[4]">
            <div className="flex">
                <div className="flex-[2] flex justify-center items-center">
                    <Image
                        src={imageUrl}
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
                            <Rating
                                name="rating-filter"
                                defaultValue={rating}
                                precision={0.1}
                                readOnly
                            />
                            <span className="text-sm ml-[5px] text-gray-500">({reviewsCount})</span>
                        </div>
                        <span className="text-sm text-gray-800 font-normal mt-[15px]">
                            {product.description}
                        </span>
                        <SocialShareButtons shareUrl={shareUrl} title={title} imageUrl={imageUrl} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;
