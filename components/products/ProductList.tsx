import { getProducts } from "../../helpers/axiosProduct";
import AddNewProductCard from "./AddNewProductCard";
import Card from "./Card";
import localFont from '@next/font/local'

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

export interface Product {
  id: string | number;
  title: string;
  description: string;
  price: number;
}

async function ProductList({ icon, title, className, colCount = 5, addNewBtn = false, onAddEditProductClicked }: { icon?: React.ReactNode, title?: string, className?: string, colCount?: number, addNewBtn?: boolean, onAddEditProductClicked?: (product: Product) => void }) {

  const products = await getProducts();
  const gridStyle = { gridTemplateColumns: `repeat(${colCount}, 1fr)`, justifyItems: "center" };

  return (
    <section className={"w-[100%] " + (className ?? "")}>
      {title ? <div className="flex items-center gap-[15px]" >
        {
          icon != null ? icon : <></>
        }
        <span className={`text-xl text-[#191C20] dark:text-[#E2E2E9] font-bold ${mtavruli.className}`}>{title}</span>
      </div> : <></>}
      <div className={`w-[100%] grid my-3 gap-y-[35px] `} style={gridStyle}>
        {products.slice(0, 5).map((product: Product) => (
          <Card
            key={product.id}
            productName={product.title}
            price={product.price}
          />
        ))}
        {addNewBtn ? (
          <AddNewProductCard onClick={
            () => {
              if (onAddEditProductClicked) {
                onAddEditProductClicked({ id: "", title: "", description: "", price: 0 });
              }
            }}
          />
        ) : <></>}
      </div>
    </section >
  );
}

export default ProductList;
