import { useState } from "react";
import Products from "../../data/ProductsData";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

function ProductList() {  
  const [sortedProducts, setSortedProducts] = useState([...Products]);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  const sortProductsByPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) =>
    ascendingOrder? a.price - b.price : b.price - a.price);

    setSortedProducts(sorted);
    setAscendingOrder(!ascendingOrder);
  }

  return (
    <section className="w-full px-16 py-10 overflow-x-auto overflow-y-auto min-h-[400px]">
      <div className="flex justify-between items-center">
        <h2 className="font-normal text-base text-[30px] leading-relaxed text-gray-700">
          Featured sets
        </h2>
            <button
              type="button"
              onClick={sortProductsByPrice}
              className="px-6 py-2 bg-[#FD8024] flex items-center gap-4 text-white uppercase font-bold rounded-md shadow-sm hover:bg-orange-200 focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500"
            >
              <FontAwesomeIcon icon={faSort} />
              Sort
            </button>
        </div>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {sortedProducts.map((product) => (
          <Card
            key={product.id}
            imageSrc={product.imageSrc}
            productName={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
