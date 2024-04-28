"use server";

import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../contants";

export async function Login(username: string, password: string) {
  "use server";

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
  return { ok: true};
}