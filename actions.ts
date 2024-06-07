"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "./contants";
import { revalidateTag } from "next/cache";
import axios from "axios";
import { createUser } from "./helpers/axiosUsers";

export async function Login(email: string, password: string) {
  console.log("Yes");
  const response = await axios
    .post("http://localhost:8080/login", {
      email,
      password,
    })
    .catch((error) => {
      console.log("Error moxda: " + error);
    });

  if (response !== undefined && response.status === 200) {
    const cookiesStore = cookies();
    cookiesStore.set(AUTH_COOKIE_KEY, response.data.token);
    return { ok: true };
  }

  return { ok: false };
}

export async function Register(formData: any) {
  const { email, password, name, surname, address, phone, image } = formData;

  let response;
  try {
    response = await axios.post("http://localhost:8080/register", {
      email,
      password,
    });
  } catch (error: any) {
    if (error.response.status === 400) {
      return { ok: false, message: "User with that email already exists" };
    }
    return { ok: false, message: "Failed to register user" };
  }

  const userId = response.data.userId;

  createUser(
    userId,
    name as string,
    email as string,
    surname as string,
    address as string,
    phone as string,
    image as string
  );

  return { ok: true };
}

export async function Logout() {
  const cookiesStore = cookies();
  cookiesStore.delete(AUTH_COOKIE_KEY);
  return { ok: true };
}

// export async function createUserAction(formData: FormData) {
//   const { name, email, age } = Object.fromEntries(formData);
//   createUser(name as string, email as string, age as string);
//   revalidateTag("users_list");
// }

// export async function deleteUserAction(id: number) {
//   await deleteUser(id);
// }

// export async function updateUserAction(formData: FormData) {
//   const { id, name, email, age } = Object.fromEntries(formData);
//   updateUser(id as string, name as string, email as string, age as string);
// }

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
