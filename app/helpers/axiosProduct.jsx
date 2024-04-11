import axios from "axios";

const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products/category/groceries");
      return res.data.products;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
};

export const getSingleProduct = async (id) => {
  const products = await getData();
  const singleProduct = products.find((product) => product.id === id);
  return singleProduct;
};
