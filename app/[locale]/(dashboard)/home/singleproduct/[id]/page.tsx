import Image from "next/image";
import DashboardLayout from "../../../DashboardLayout";
import { getTranslations } from "next-intl/server";
import LegoEcho from "../../../../../../public/LegoEcho.png";

interface Product {
  id: number | string;
  title: string;
  description: string;
  price: number;
}

async function getSingleProduct(id: string): Promise<Product | null> {
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

interface SingleProductProps {
  params: {
    id: string;
  };
}

async function singleProduct({
  params: { id },
}: SingleProductProps): Promise<JSX.Element> {
  const t = await getTranslations("singleProduct");
  const singlePageProduct = await getSingleProduct(id);

  if (!singlePageProduct) {
    return (
      <DashboardLayout>
        <section className="w-full min-h-[646px] flex items-center justify-center py-10 px-8">
          <p className="text-xl text-gray-900 dark:text-white">Product not found.</p>
        </section>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <section className="w-full">
        <div className="w-full min-h-[646px] flex items-center justify-center gap-6 py-10 px-8 shadow-xl dark:bg-black">
          <div className="flex justify-center w-2/4">
            <Image
              src={LegoEcho}
              alt="product image"
              width={192}
              height={192}
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

export default singleProduct;