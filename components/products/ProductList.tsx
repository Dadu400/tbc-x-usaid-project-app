import { getProducts } from "../../helpers/axiosProduct";
import Card from "./Card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSort } from "@fortawesome/free-solid-svg-icons";
// import SearchInput from "./SearchInput";
import { useLocale } from "next-intl";
// import Products from "../../data/ProductsData";

// const getData = async () => {
//   try {
//     const res = await axios.get("https://dummyjson.com/products/category/groceries");
//     return res.data.products;
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       throw new Error(`Failed to fetch data: ${error.message}`);
//     }
//     throw new Error("Failed to fetch data");
//   }
// }

interface Product {
  id: string | number;
  title: string;
  description: string;
  price: number;
}

async function ProductList() {
  // const [originalProducts, setOriginalProducts] = useState<Product[]>([]);
  // const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  // const [ascendingOrder, setAscendingOrder] = useState(true);
  const locale = useLocale();

  const Products = await getProducts();
  console.log(Products);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const products = await getProducts();
  //     console.log(products)
  //     setOriginalProducts(products);
  //     setSortedProducts(products);
  //   };
  //   fetchProducts();
  // }, []);

  // const debounce = (cb: (...args: any[]) => void, delay: number) => {
  //   let timeout: NodeJS.Timeout | null;
  //   return function (...args: any[]) {
  //     if (timeout) clearTimeout(timeout);
  //     timeout = setTimeout(() => cb(...args), delay);
  //   };
  // };

  // const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   const filteredProducts = originalProducts.filter((product) =>
  //     product.title.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setSortedProducts(filteredProducts);
  // };

  // const handleSearchChange = debounce(handleSearch, 1000);

  // const sortProductsByPrice = () => {
  //   const sorted = [...sortedProducts].sort((a, b) =>
  //     ascendingOrder ? a.price - b.price : b.price - a.price
  //   );
  //   setSortedProducts(sorted);
  //   setAscendingOrder(!ascendingOrder);
  // };

  return (
    <section className="w-full px-16 py-16 min-h-[400px] dark:bg-black">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl leading-relaxed text-gray-700 dark:text-white">
          {locale == "en" ? "Featured sets" : "გამორჩეული კოლექცია"}
        </h2>
        <div className="flex gap-2">
          {/* <SearchInput onChange={handleSearchChange} /> */}
          {/* <button
            onClick={sortProductsByPrice}
            className={`px-4 py-2 bg-[#FD8024] flex items-center gap-2 text-white uppercase font-bold rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500 
            ${ascendingOrder ? "hover:bg-orange-400" : "hover:bg-[#FD8024]"}`}
            aria-label="Sort products by Price"
          >
            <FontAwesomeIcon icon={faSort} />
            {locale == "en" ? "sort" : "სორტირება"}
          </button> */}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {Products.map((product : Product) => (
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
