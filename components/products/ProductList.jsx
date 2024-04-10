"use client"

import { useState, useEffect } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";
import { fetchProducts } from "@/data/axios";

function ProductList() {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts(); 
        setOriginalProducts(response);
        setSortedProducts(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const debounce = (cb, delay) => {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => cb.apply(context, args), delay);
    };
  };

  const handleSearch = (value) => {
    const filteredProducts = originalProducts.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setSortedProducts(filteredProducts);
  };

  const handleSearchChange = debounce(handleSearch, 1000);

  const sortProductsByPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) =>
      ascendingOrder ? a.price - b.price : b.price - a.price
    );

    setSortedProducts(sorted);
    setAscendingOrder(!ascendingOrder);
  };

  return (
    <section className="w-full px-16 py-16 min-h-[400px]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl leading-relaxed text-gray-700">
          Featured sets
        </h2>
        <div className="flex gap-2">
          <SearchInput onChange={handleSearchChange} />
          <button
            type="button"
            onClick={sortProductsByPrice}
            className={`px-4 py-2 bg-[#FD8024] flex items-center gap-2 text-white uppercase font-bold rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500 
            ${ascendingOrder ? "hover:bg-orange-400" : "hover:bg-[#FD8024]"}`}
            aria-label="Sort products by Price"
          >
            <FontAwesomeIcon icon={faSort} />
            sort
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {sortedProducts?.map((product) => {
          return(
          <Card
            key={product.id}
            imageSrc={product.images[0]} 
            productName={product.title}
            price={product.price}
          />
        )})}
      </div>
    </section>
  );
}

export default ProductList;
