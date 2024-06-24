import Head from 'next/head';
import DashboardLayout from '../../DashboardLayout';
import { Metadata } from 'next';
import { Product } from '../../../../../components/products/Cart';
import { GetSession, getProductSeller, getSingleProduct } from '../../../../../actions';
import ProductDetails from '../../../../../components/products/ProductDetails';
import ProductSellerDetails from '../../../../../components/products/ProductSellerDetails';
import ProductReviewDetails from '../../../../../components/products/ProductReviewDetails';

interface Params {
    id: string;
    locale: string;
    user: any;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const post = await getSingleProduct(params.id);
    return {
        title: post?.title || 'Product',
        description: post?.description || 'Product details',
    };
}

export default async function singleProduct({ params }: { params: Params }) {
    const product: Product = await getSingleProduct(params.id);
    const seller = await getProductSeller(params.id);
    const session = await GetSession();

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
    const imageUrl = product.image ? product.image : '';

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
                <ProductDetails session={session} product={product} shareUrl={shareUrl} title={title} imageUrl={imageUrl} />
                <ProductSellerDetails seller={seller} />
                <ProductReviewDetails productId={product.id} session={session} />
            </DashboardLayout>
        </>
    );
}
