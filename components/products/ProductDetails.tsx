
import { Product } from "./Cart";
import ProductCheckoutCart from "./ProductCheckoutCart";
import ProductInfo from "./ProductInfo";
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
        <div className="bg-[#FEFEFE] flex w-[60vw] mx-auto gap-[30px] mt-[60px] p-6">
            <ProductInfo reviews={reviews} product={product} shareUrl={shareUrl} title={title} imageUrl={imageUrl} />
            <ProductCheckoutCart session={session} product={product} />
        </div>
    );
}

export default ProductDetails;