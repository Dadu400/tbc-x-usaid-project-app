import { getSingleProduct } from "../../../../../helpers/axiosProduct";
import Image from "next/image";
import axios from "axios";
import DashboardLayout from "../../../DashboardLayout";
import { getTranslations } from "next-intl/server";
import { unstable_setRequestLocale } from 'next-intl/server';

interface Product {
  id: number;
  locale: string;
  title: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

export async function generateStaticParams() {
  const res = await axios.get("https://dummyjson.com/products/category/groceries");
  return res.data.products.map((product: Product) => ({
    id: `${product.id}`,
  }));
}

export default async function singleProduct({ params }: { params: Product }) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations("singleProduct")
  const idString = params?.id;
  const id = Number(idString);
  const product = await getSingleProduct(id);

  return (
    <DashboardLayout>
      <section className="w-full">
        <div className="w-full min-h-[646px] flex items-center justify-center gap-6 py-10 px-8 shadow-xl dark:bg-black">
          <div className="flex justify-center w-2/4">
            <Image
              src={product.images[0]}
              alt="product image"
              width={48}
              height={48}
              className="h-48 w-48 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-2/4">
            <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {product.title}
            </p>
            <p className="text-lg text-gray-700 dark:text-white">
              <span className="font-semibold">{t("brand")}:</span> {product.brand}
            </p>
            <p className="text-md text-gray-600 mt-4 dark:text-white">
              <span className="font-semibold">{t("description")}:</span>{" "}
              {product.description}
            </p>
            <p className="text-md text-gray-600 dark:text-white">
              <span className="font-semibold">{t("category")}:</span> {product.category}
            </p>
            <p className="text-md text-gray-600 dark:text-white">
              <span className="font-semibold">{t("stock")}:</span>{" "}
              {product.stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="text-2xl text-gray-900 font-semibold mt-4 dark:text-white">
              <span className="font-semibold">{t("price")}:</span> ${product.price}
            </p>
            <p className="text-md text-yellow-500 mt-2">
              {" "}
              <span className="font-semibold">{t("rating")}:</span>
              {Array(Math.max(0, Math.min(5, Math.floor(product.rating || 0))))
                .fill("⭐")
                .map(() => "⭐")}
            </p>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
