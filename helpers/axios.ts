import axios from "axios";
import { GetSession, getBlogs } from "../actions";
import { User } from "./axiosUsers";
import { Blog } from "../components/blogs/BlogCard";

export const getSingleBlog = async (id: number | string) => {
  const blog: Blog[] = await getBlogs();
  const singleBlog = blog.find((blog: Blog) => Number(blog.id) === Number(id));
  return singleBlog !== undefined ? singleBlog : ({} as Blog);
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

export async function getAllOrders() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/orders`
  );
  const orders = await response.data;

  if (orders === undefined || orders.orders === undefined) {
    return [];
  }

  return orders.orders;
}

export async function getOrders() {
  const session = await GetSession();
  if (!session) {
    return [];
  }

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/orders/${
      (session.user as User).id
    }`
  );
  const orders = await response.data;

  if (orders === undefined || orders.orders === undefined) {
    return [];
  }

  return orders.orders;
}
