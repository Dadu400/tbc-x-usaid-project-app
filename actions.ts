"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "./contants";
import { revalidateTag } from "next/cache";
import axios from "axios";
import { jwtVerify } from "jose";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { Review } from "./components/products/ProductReviewDetails";

const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function Login(email: string, password: string) {
  const response = await axios
    .post(process.env.NEXT_PUBLIC_VERCEL_URL + "/api/auth/login", {
      email,
      password,
    })
    .catch((error) => {});

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
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/auth/create-user",
      formData
    );
  } catch (error: any) {
    if (error.response.status === 400) {
      return { ok: false, message: "User with that email already exists" };
    }
    return { ok: false, message: "Failed to register user" };
  }

  return { ok: true };
}

export async function UpdateUser(formData: any) {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/auth/update-user",
      formData
    );

    const cookiesStore = cookies();
    cookiesStore.set(AUTH_COOKIE_KEY, response.data.token, { httpOnly: true });
  } catch (error) {
    return { ok: false, message: "Failed to update user" };
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

export async function HandleChangePassword(
  email: string | undefined,
  oldPassword: string | undefined,
  newPassword: string | undefined,
  confirmNewPassword: string | undefined
) {
  try {
    await axios.post(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/auth/change-password",
      {
        email,
        oldPassword,
        newPassword,
        confirmNewPassword,
      }
    );
    return { ok: true, message: "პაროლი წარმატებით შეიცვალა" };
  } catch (error) {
    return { ok: false, message: "პაროლის ცვლილება ვერ მოხერხდა" };
  }
}

export async function SaveProduct(formData: any) {
  const { title, description, price, category, image, userId } = formData;
  try {
    await axios.post(process.env.NEXT_PUBLIC_VERCEL_URL + "/api/save-product", {
      title,
      description,
      price,
      category,
      image,
      userId,
    });
    return { ok: true };
  } catch (error) {
    return { ok: false, message: "Failed to save product" };
  }
}

export async function UpdateProduct(formData: any) {
  const { productId, title, description, price, category, image } = formData;
  try {
    await axios.post(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/update-product",
      {
        productId,
        title,
        description,
        price,
        category,
        image,
      }
    );
    return { ok: true };
  } catch (error) {
    return { ok: false, message: "Failed to update product" };
  }
}

export async function DeleteProduct(formData: any) {
  try {
    await axios.delete(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/delete-product",
      {
        data: formData,
      }
    );
    return { ok: true };
  } catch (error) {
    return { ok: false, message: "Failed to delete product" };
  }
}

export const handleInstantBuy = async (productId: string, quantity: number) => {
  "use server";

  const session = await GetSession();
  if (session === undefined) {
    console.error("User is not authenticated");
    return;
  }

  try {
    await handleEmptyCart();
    for (let i = 0; i < quantity; i++) {
      await handleAddToCart(productId);
    }
    return { ok: true };
  } catch (error) {
    console.error("Error instant buying product:", error);
    return { ok: false };
  }
};

export const handleAddToCart = async (productId: string) => {
  "use server";
  const session = await GetSession();

  if (session === undefined) {
    console.error("User is not authenticated");
    return;
  }

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/cart/add-product",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: session.user.id,
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

export const handleDecrementCart = async (productId: string) => {
  "use server";
  const session = await GetSession();
  if (session === undefined) {
    console.error("User is not authenticated");
    return;
  }

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/cart/decrement-product",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.id,
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
  const session = await GetSession();
  if (session === undefined) {
    console.error("User is not authenticated");
    return;
  }

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/cart/clear-cart",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.id,
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
  const session = await GetSession();
  if (session === undefined) {
    console.error("User is not authenticated");
    return;
  }

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_VERCEL_URL + "/api/cart/delete-product",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.id,
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

export async function getSingleProduct(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-products/${id}`
    );
    const data = await response.json();
    if (data.products?.rows?.length > 0) {
      return data.products.rows[0];
    } else {
      console.error("Product not found or invalid response format", data);
      return null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function getProductSeller(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${id}/seller`
    );
    const data = await response.json();
    return data.user;
  } catch (error) {
    return null;
  }
}

export async function addReview(
  productId: number,
  userId: number,
  rating: number,
  comment: string
) {
  try {
    await axios.post(
      process.env.NEXT_PUBLIC_VERCEL_URL + `/api/product/${productId}/reviews`,
      {
        userId: userId,
        rating: rating,
        comment: comment,
      }
    );
    return { ok: true };
  } catch (error) {
    return { ok: false, message: "Failed to add review" };
  }
}

export async function getReviews(productId: number) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_VERCEL_URL + `/api/product/${productId}/reviews`
    );
    return response.data.reviews;
  } catch (error) {
    return [];
  }
}
