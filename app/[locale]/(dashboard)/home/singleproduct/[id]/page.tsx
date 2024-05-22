import Image from "next/image";
// import axios from "axios";
import DashboardLayout from "../../../DashboardLayout";
import { getTranslations } from "next-intl/server";
// import { unstable_setRequestLocale } from 'next-intl/server';
import LegoEcho from "../../../../../../public/LegoEcho.png";

// interface Product {
//   id: number | string;
//   locale: string;
//   title: string;
//   description: string;
//   price: number;
// }

export async function getSingleProduct(id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-products/${id}`);
    const data = await response.json();
    if (data.products?.rows?.length > 0) {
      return data.products.rows[0];
    } else {
      console.error("Product not found or invalid response format", data);
      return null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}


// export async function generateStaticParams() {
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-products`);
//   console.log(res, "res")
//   return res.data.products.row.map((product: Product) => ({
//     id: `${product.id}`,
//   }));
// }

export default async function singleProduct({
  params: { id },
}: {
  params: { id: string };}) {
  // unstable_setRequestLocale(params.locale);
  const t = await getTranslations("singleProduct")
  // const idString = params?.id;
  // const id = Number(idString);
  const singlePageProduct = await getSingleProduct(id);

  return (
    <DashboardLayout>
      <section className="w-full">
        <div className="w-full min-h-[646px] flex items-center justify-center gap-6 py-10 px-8 shadow-xl dark:bg-black">
          <div className="flex justify-center w-2/4">
            <Image
              src={LegoEcho}
              alt="product image"
              width={48}
              height={48}
              className="h-48 w-48 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-2/4">
            <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              {singlePageProduct.title}
            </p>
            <p className="text-md text-gray-600 mt-4 dark:text-white">
              <span className="font-semibold">{t("description")}:</span>{" "}
              {singlePageProduct.description}
            </p>
            <p className="text-2xl text-gray-900 font-semibold mt-4 dark:text-white">
              <span className="font-semibold">{t("price")}:</span> ${singlePageProduct.price}
            </p>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
