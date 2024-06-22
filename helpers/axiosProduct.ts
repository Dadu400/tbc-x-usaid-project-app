// import axios from "axios";
import { revalidateTag } from "next/cache";

// interface Product {
//   id: number;
// }

// const getData = async () => {
//   try {
//     const res = await axios.get(
//       "https://dummyjson.com/products/category/groceries"
//     );
//     return res.data.products;
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new Error(`Failed to fetch data: ${error.message}`);
//     }
//     throw new Error("Failed to fetch data");
//   }
// };

// export const getSingleProduct = async (id: number | string) => {
//   const products = await getData();
//   const singleProduct = products.find((product: Product) => product.id === id);
//   return singleProduct;
// };

export async function getProducts() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_VERCEL_URL + "/api/get-products"
  );
  const { products } = await response.json();
  return products?.rows;
}

export async function QueryProducts(formData: any) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_VERCEL_URL + "/api/query-products",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  );
  const { products } = await response.json();
  if (products === undefined) {
    return [];
  }
  return products.rows;
}

export const handleAddToCart = async (productId: string) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/add-product",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: 1, productId: productId, quantity: 1 }),
      }
    );
    revalidateTag("cart");
    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

export const handleDecrementCart = async (productId: string) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/decrement-product",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
          productId: productId,
          quantity: 1,
        }),
      }
    );
    revalidateTag("cart");
    if (!response.ok) {
      throw new Error("Failed to add item to cart");
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

export const handleEmptyCart = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/clear-cart",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to clear cart");
    }

    revalidateTag("cart");
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
};

export const handleDeleteProduct = async (productId: string) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/delete-product",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
          productId: productId,
        }),
      }
    );

    revalidateTag("cart");

    if (!response.ok) {
      throw new Error("Failed to remove item from cart");
    }
  } catch (error) {
    console.error("Error removing item from cart:", error);
  }
};
