"use client";

import localFont from '@next/font/local';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import { Review } from './ProductReviewDetails';
import { useState } from 'react';
import { addReview } from '../../actions';
import { useRouter } from 'next/navigation';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const mtavruli = localFont({ src: "../../public/fonts/mtavruli.ttf" });

function ProductReview({ productId, review, isNew = false }: { productId: number, review: Review, isNew?: boolean }) {
    const router = useRouter();

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const formattedDate = new Date(review.added_on).toLocaleDateString('ka-GE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const sendReview = async () => {
        const response = await addReview(productId, review.user.id, rating, comment);
        if (response.ok) {
            setRating(0);
            setComment('');
            router.refresh();
        }
    }

    return (
        <div key={review.id} className={`flex items-center gap-[20px] mt-[20px]`}>
            <div className='w-[100px] h-[100px]'>
                <Image src={review.user.imageurl} alt={review.user.name + " " + review.user.surname} width={100} height={100} className="rounded-full border-[1px] dark:border-[#ffffff1f] cursor-pointer w-[100px] max-w-[100px] h-[100px]" />
            </div>
            <div className="w-full flex flex-col">
                <div className="flex justify-between items-center">
                    <span className={`text-md ${mtavruli.className}`}>{review.user.name} {review.user.surname}</span>
                    {!isNew && <span className="text-sm text-gray-500">{formattedDate}</span>}
                </div>
                {isNew ? (
                    <Rating
                        name="rating-filter"
                        value={Number(rating)}
                        precision={0.5}
                        onChange={(_event, value) => {
                            setRating(value || 0);
                        }}
                        emptyIcon={
                            <StarBorderIcon fontSize="inherit" className="dark:text-[#ffffffbf]" />
                        }
                    />
                ) : (
                    <Rating
                        name="rating-filter"
                        defaultValue={Number(review.rating)}
                        precision={0.5}
                        readOnly
                        emptyIcon={
                            <StarBorderIcon fontSize="inherit" className="dark:text-[#ffffffbf]" />
                        }
                    />
                )}
                <span >

                </span>
                {isNew ? (
                    <div className="flex flex-col gap-[10px]">
                        <textarea
                            className="w-full h-full focus:outline-none border-[1px] dark:border-[#ffffff1f] dark:bg-[#121B18] rounded-lg p-4 text-sm text-gray-700 dark:text-white mt-[10px]"
                            placeholder="დაამატეთ კომენტარი"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <button className={`rounded text-sm px-4 py-2 bg-[#EC6652] text-white ${mtavruli.className} w-[150px] self-end tracking-wider`} onClick={() => sendReview()}>შეფასება</button>
                    </div>
                ) : (<span className="flex-1 w-full border-[1px] dark:border-[#ffffff1f] dark:bg-[#121B18] rounded-lg p-4 text-sm mt-[10px] text-gray-700 dark:text-white">{review.comment}</span>)}
            </div>
        </div>
    )
}

export default ProductReview