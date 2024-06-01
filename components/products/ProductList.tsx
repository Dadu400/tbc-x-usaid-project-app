import { getProducts } from "../../helpers/axiosProduct";
import AddNewProductCard from "./AddNewProductCard";
import Card from "./Card";


export interface Product {
  id: string | number;
  title: string;
  description: string;
  price: number;
}

async function ProductList({ icon, title, className, colCount = 5, addNewBtn = false }: { icon?: React.ReactNode, title?: string, className?: string, colCount?: number, addNewBtn: boolean }) {
  const products = await getProducts();

  return (
    <section className={"w-[100%] mx-auto " + (className ?? "")}>
      <div className="flex items-center justify-between gap-[15px]" >
        {
          icon != null ? (
            <div className="bg-[#3C74FF] flex items-center text-2xl px-[3px] py-[5px] rounded-[10px] text-white">
              {icon}
            </div>
          ) : <></>
        }
        <span className="text-2xl text-black font-bold font-['mtavruli']">{title}</span>
      </div>
      <div className={`grid grid-cols-${colCount} mt-5 gap-y-[15px]`}>
        {products.map((product: Product) => (
          <Card
            key={product.id}
            id={product.id}
            productName={product.title}
            price={product.price}
          />
        ))}
        {products.map((product: Product) => (
          <Card
            key={product.id}
            id={product.id}
            productName={product.title}
            price={product.price}
          />
        ))}
        {addNewBtn ? (
          <AddNewProductCard />
        ) : <></>}
      </div>
    </section >
  );
}

export default ProductList;
