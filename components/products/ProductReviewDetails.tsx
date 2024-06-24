import StarIcon from '@mui/icons-material/Star';
import ProductReview from './ProductReview';

export interface Review {
    id: number,
    user: {
        id: number;
        name: string;
        surname: string;
        image: string;
    };
    rating: number;
    comment: string;
}

function ProductReviewDetails({ productId, session }: { productId: number, session: any }) {
    const dummyReviews = [
        {
            "id": 1,
            "user": {
                "id": 1,
                "name": "გიორგი",
                "surname": "გიორგიანი",
                "image": "https://gwas7ga1a6kpusqm.public.blob.vercel-storage.com/randomMan-WzORF3PI0yTVHomWsvtegEmNJLTdXZ.jpg"
            },
            "rating": 5,
            "comment": "მაგარი პროდუქტია",
        },
        {
            "id": 2,
            "user": {
                "id": 1,
                "name": "გიორგი",
                "surname": "გიორგიანი",
                "image": "https://gwas7ga1a6kpusqm.public.blob.vercel-storage.com/randomMan-WzORF3PI0yTVHomWsvtegEmNJLTdXZ.jpg"
            },
            "rating": 3,
            "comment": "მაგარი პროდუქტია",
        },
        {
            "id": 3,
            "user": {
                "id": 1,
                "name": "გიორგი",
                "surname": "გიორგიანი",
                "image": "https://gwas7ga1a6kpusqm.public.blob.vercel-storage.com/randomMan-WzORF3PI0yTVHomWsvtegEmNJLTdXZ.jpg"
            },
            "rating": 4.5,
            "comment": "მაგარი პროდუქტია",
        }
    ]


    return (
        <div className="bg-[#FEFEFE] mt-[40px] flex w-[60vw] mx-auto shadow-xl p-[25px] mb-[60px] gap-[10px] flex-col">
            <span className="font-['mtavruli'] border-b-[#1e90ff] border-b-[2px] flex items-center gap-[8px] pb-[5px] w-[135px]">
                <StarIcon className="text-[#FFB200]" /> შეფასებებები
            </span>
            <div className="flex flex-col gap-[20px]">
                <ProductReview productId={productId} review={{ id: 0, user: { id: session.user.id, name: session.user.name, surname: session.user.surname, image: session.user.imageurl }, review: 5, comment: '' }} isNew />

                {dummyReviews.map((review, index) => (
                    <ProductReview productId={productId} review={review} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ProductReviewDetails;