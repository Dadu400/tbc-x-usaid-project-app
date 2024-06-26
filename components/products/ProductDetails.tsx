import ProductCheckoutCart from "./ProductCheckoutCart";
import ProductInfo from "./ProductInfo";
import { Product } from "./ProductList";
import { Review } from "./ProductReviewDetails";

interface ProductDetailsProps {
    reviews: Review[];
    session: any;
    product: Product;
    shareUrl: string;
    title: string;
    imageUrl: string;
}

function ProductDetails({ reviews, session, product, shareUrl, title, imageUrl }: ProductDetailsProps) {
    return (
        <div className="bg-[#FEFEFE] dark:bg-[#1D2024] flex flex-col md:flex-row w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[65%] mx-auto gap-[30px] mt-[60px] p-6 rounded-lg shadow-lg border dark:border-[#ffffff1f]">
            <ProductInfo reviews={reviews} product={product} shareUrl={shareUrl} title={title} imageUrl={imageUrl} />
            <ProductCheckoutCart session={session} product={product} />
        </div>
    );
}

export default ProductDetails;