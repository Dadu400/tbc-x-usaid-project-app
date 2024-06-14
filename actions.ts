"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "./contants";
import { revalidateTag } from "next/cache";
import axios from "axios";
import { jwtDecrypt, jwtVerify } from "jose";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function Login(email: string, password: string) {
  const response = await axios
    .post(process.env.NEXT_PUBLIC_VERCEL_URL + "/api/login", {
      email,
      password,
    })
    .catch((error) => {
      console.log("Error moxda: " + error);
    });

  if (response !== undefined && response.status === 200) {
    const cookiesStore = cookies();
    cookiesStore.set(AUTH_COOKIE_KEY, response.data.token, { httpOnly: true });
    return { ok: true };
  }

  return { ok: false };
}

export async function Register(formData: any) {
  try {
    await axios.post(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/create-user",
      formData
    );
  } catch (error: any) {
    if (error.response.status === 400) {
      console.log(error.response.data);
      return { ok: false, message: "User with that email already exists" };
    }
    return { ok: false, message: "Failed to register user" };
  }

  return { ok: true };
}

export async function Logout() {
  const cookiesStore = cookies();
  cookiesStore.delete(AUTH_COOKIE_KEY);
  return { ok: true };
}

export async function GetSession() {
  const cookiesStore = cookies();

  const requestToken: RequestCookie | undefined =
    cookiesStore.get(AUTH_COOKIE_KEY);

  if (!requestToken || !requestToken.value) {
    return undefined;
  }

  const token = String(requestToken.value);

  try {
    const { payload } = await jwtVerify(token, jwtSecret, {});
    return payload;
  } catch (error) {
    console.error("Error decoding token:", error);
    return undefined;
  }
}

export async function SaveProduct(formData: any) {
  const { title, description, price, category, image } = formData;
  let response;
  try {
    response = await axios.post(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/save-product",
      {
        title,
        description,
        price,
        category,
        image,
      }
    );
    return { ok: true };
  } catch (error) {
    return { ok: false, message: "Failed to save product" };
  }
}

export const handleAddToCart = async (productId: string) => {
  "use server";
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
  "use server";
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
  "use server";
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
  "use server";
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
