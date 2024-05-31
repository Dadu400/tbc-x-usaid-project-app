import { getProducts } from "../../helpers/axiosProduct";
import Card from "./Card";
import { useLocale } from "next-intl";
import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';


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
      <div className="flex items-center gap-[15px]">
        <div className="bg-[#3C74FF] flex items-center text-2xl px-[3px] py-[5px] rounded-[10px] text-white">
          <FiberNewOutlinedIcon fontSize="large" />
        </div>
        <span className="text-2xl text-black font-bold font-['mtavruli']">ახალი დამატებული</span>
      </div>
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
