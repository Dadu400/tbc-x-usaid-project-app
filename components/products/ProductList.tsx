import { getProducts } from "../../helpers/axiosProduct";
import AddNewProductCard from "./AddNewProductCard";
import Card from "./Card";


export interface Product {
  id: string | number;
  title: string;
  description: string;
  price: number;
}

async function ProductList({ icon, title, className, colCount = 5, addNewBtn = false, onAddEditProductClicked }: { icon?: React.ReactNode, title?: string, className?: string, colCount?: number, addNewBtn: boolean, onAddEditProductClicked: (product: Product) => void }) {

  const products = await getProducts();
  const gridStyle = { gridTemplateColumns: `repeat(${colCount}, 1fr)` };

  return (
    <section className={"w-[100%] mx-auto " + (className ?? "")}>
      <div className="flex items-center gap-[15px]" >
        {
          icon != null ? icon : <></>
        }
        <span className="text-2xl text-[#191C20] dark:text-[#E2E2E9] font-bold font-['mtavruli']">{title}</span>
      </div>
      <div className={`grid mt-6 gap-y-[15px]`} style={gridStyle}>
        {products.slice(0, 5).map((product: Product) => (
          <Card
            key={product.id}
            id={product.id}
            productName={product.title}
            price={product.price}
          />
        ))}
        {addNewBtn ? (
          <AddNewProductCard onClick={
            () => {
              onAddEditProductClicked({ id: "", title: "", description: "", price: 0 });
            }}
          />
        ) : <></>}
      </div>
    </section >
  );
}

export default ProductList;
