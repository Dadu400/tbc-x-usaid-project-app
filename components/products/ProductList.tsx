import Link from "next/link";
import { getProducts } from "../../helpers/axiosProduct";
import AddNewProductCard from "./AddNewProductCard";
import ProductCard from "./ProductCard";
import localFont from '@next/font/local'
import { GetSession } from "../../actions";

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  userid: number;
  added_on: Date;
}

async function ProductList({ icon, title, products, className, colCount = 5, addNewBtn = false }: { icon?: React.ReactNode, title?: string, products?: Product[], className?: string, colCount?: number, addNewBtn?: boolean }) {
  const session = await GetSession();

  if (!products) {
    products = await getProducts();
  }
  const gridStyle = { gridTemplateColumns: `repeat(${colCount}, 1fr)`, justifyItems: "center" };

  return (
    <section className={"w-[100%] " + (className ?? "")}>
      {title ? <div className="flex items-center gap-[15px] uppercase" >
        {icon != null ? icon : <></>}
        <span className={`text-xl text-[#191C20] dark:text-[#E2E2E9] font-bold ${mtavruli.className}`}>{title}</span>
      </div> : <></>}
      <div className={`w-[100%] grid my-3 gap-y-[35px] `} style={gridStyle}>
        {products?.map((product: Product) => (
          <ProductCard
            key={product.id.toString()}
            product={product}
            session={session}
          />
        ))}
        {addNewBtn ? (
          <Link href={"/profile/products/create"}>
            <AddNewProductCard />
          </Link>
        ) : <></>}
      </div>
    </section >
  );
}

export default ProductList;
