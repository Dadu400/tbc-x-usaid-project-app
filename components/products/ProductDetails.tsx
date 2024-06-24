
import { Product } from "./Cart";
import ProductCheckoutCart from "./ProductCheckoutCart";
import ProductInfo from "./ProductInfo";

interface ProductDetailsProps {
    product: Product;
    shareUrl: string;
    title: string;
    imageUrl: string;
}

function ProductDetails({ product, shareUrl, title, imageUrl }: ProductDetailsProps) {
    return (
        <div className="bg-[#FEFEFE] flex w-[60vw] mx-auto gap-[30px] mt-[60px] p-6">
            <ProductInfo product={product} shareUrl={shareUrl} title={title} imageUrl={imageUrl} />
            <ProductCheckoutCart product={product} />
        </div>
    );
}

export default ProductDetails;