import { getProducts } from "../../helpers/axiosProduct";
import Card from "./Card";
import { useLocale } from "next-intl";


export interface Product {
  id: string | number;
  title: string;
  description: string;
  price: number;
}

async function ProductList() {
  const products = await getProducts();

  return (
    <section className="w-[60vw] mx-auto mt-[50px] min-h-[400px]">
      <h2 className="text-2xl text-black font-bold font-['mtavruli']">
        ახალი დამატებული
      </h2>
      <div className="flex flex-wrap gap-6 mt-5">
        {products.map((product: Product) => (
          <Card
            key={product.id}
            id={product.id}
            productName={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
