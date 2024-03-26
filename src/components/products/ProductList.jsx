import Products from "../../data/ProductsData";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ProductList() {
  return (
    <section className="w-full px-16 py-10 overflow-x-auto overflow-y-auto min-h-[400px]">
      <div className="flex justify-between items-center">
        <h2 className="font-normal text-base text-2xl leading-relaxed text-gray-700">
          Featured sets
        </h2>
        <div className="relative">
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-[40px] rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-opacity-50 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 px-4 py-2 bg-[#FD8024] text-white font-bold rounded-md shadow-sm hover:bg-orange-200 focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {Products.map((product) => (
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
