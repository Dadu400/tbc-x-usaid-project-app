"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "./contants";
import { createUser, deleteUser, updateUser } from "./helpers/axiosUsers";
import { revalidateTag } from "next/cache";

export async function Login(username: string, password: string) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const user = await response.json();

  if (user.token) {
    const cookiesStore = cookies();
    cookiesStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
  } else {
    throw new Error(user.message);
  }
}

export async function Logout() {
  const cookiesStore = cookies();
  cookiesStore.delete(AUTH_COOKIE_KEY);
  return { ok: true };
}

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  createUser(name as string, email as string, age as string);
  revalidateTag("users_list");
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
}

export async function updateUserAction(formData: FormData) {
  const { id, name, email, age } = Object.fromEntries(formData);
  updateUser(id as string, name as string, email as string, age as string)
}
