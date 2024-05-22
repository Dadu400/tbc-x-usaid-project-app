import axios from "axios";

interface Product {
  id: number;
}

const getData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products/category/groceries");
    return res.data.products;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
    throw new Error("Failed to fetch data");
  }
};

export const getSingleProduct = async (id: number | string) => {
  const products = await getData();
  const singleProduct = products.find((product: Product) => product.id === id);
  return singleProduct;
};

export async function getProducts() {
  const response = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + '/api/get-products');
  const { products } = await response.json();
  return products?.rows;
}