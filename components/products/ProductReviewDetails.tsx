import StarIcon from '@mui/icons-material/Star';
import ProductReview from './ProductReview';

export interface Review {
    id: number,
    user: {
        id: number;
        name: string;
        surname: string;
        imageurl: string;
    };
    rating: number;
    comment: string;
    added_on: Date;
}

export const revalidate = 0;

async function ProductReviewDetails({ reviews, productId, session }: { reviews: Review[], productId: number, session: any }) {
    return (
        <div className="bg-[#FEFEFE] mt-[40px] flex w-[60vw] mx-auto shadow-xl p-[25px] mb-[60px] gap-[10px] flex-col">
            <span className="font-['mtavruli'] border-b-[#1e90ff] border-b-[2px] flex items-center gap-[8px] pb-[5px] w-[135px]">
                <StarIcon className="text-[#FFB200]" /> შეფასებებები
            </span>
            <div className="flex flex-col gap-[20px]">
                <ProductReview productId={productId} review={{ id: 0, user: { id: session.user.id, name: session.user.name, surname: session.user.surname, imageurl: session.user.imageurl }, rating: 0, comment: '', added_on: new Date() }} isNew />

                {reviews.map((review, index) => (
                    <ProductReview productId={productId} review={review} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ProductReviewDetails;