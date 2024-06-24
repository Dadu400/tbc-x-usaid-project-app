import axios from "axios";
import { GetSession } from "../actions";

interface Post {
  title: string;
  tags: string[];
  id: string | number;
  body: string;
}

let cachedData: Post[] = [];

const getData = async () => {
  if (cachedData.length !== 0) {
    return cachedData;
  }

  try {
    const res = await axios.get("https://dummyjson.com/posts");
    cachedData = res.data.posts;
    return cachedData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch data of Posts: ${error.message}`);
    }
    throw new Error("Failed to fetch data");
  }
};

export const getSingleBlog = async (id: number | string) => {
  const blog = await getData();
  const singleBlog = blog.find((post: Post) => post.id === Number(id));
  return singleBlog !== undefined ? singleBlog : ({} as Post);
};

export async function getUserCart(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/cart/get-cart/${id}`
  );
  const carts = await response.json();

  if (
    carts === undefined ||
    carts.carts == undefined ||
    carts.carts.rows === undefined
  ) {
    return {};
  }

  const [cart] = carts.carts.rows;
  return cart;
}

export async function getOrders() {
  const session = await GetSession();
  if (!session) {
    return [];
  }

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/orders/${session.user.id}`
  );
  const orders = await response.data;

  if (orders === undefined || orders.orders === undefined) {
    return [];
  }

  return orders.orders;
}
